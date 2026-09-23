import * as THREE from 'three';
import { gsap } from 'gsap';
import albumData from '../../data/home-albums.json';

type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  branch: string;
  intro: string;
};

const albums: Album[] = albumData;
const TWO_PI = Math.PI * 2;
const TURNS = 2.7;
const START_LATITUDE = 0.58;
const LATITUDE_RANGE = 1.16;
const GALLERY_RADIUS = 8.7;
const GRID_RADIUS = 10.4;

function pointOnSphere(progress: number) {
  const latitude = START_LATITUDE - progress * LATITUDE_RANGE;
  const longitude = progress * TURNS * TWO_PI;
  return {
    longitude,
    direction: new THREE.Vector3(
      Math.cos(latitude) * Math.sin(longitude),
      Math.sin(latitude),
      Math.cos(latitude) * Math.cos(longitude),
    ),
  };
}

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export async function initAlbumSphere(shell: HTMLElement) {
  if (!supportsWebGL()) throw new Error('WebGL is unavailable');

  const canvas = shell.querySelector<HTMLCanvasElement>('[data-album-canvas]');
  const scrollRoot = document.querySelector<HTMLElement>('[data-home-scroll]');
  if (!canvas || !scrollRoot) throw new Error('Album sphere mount points are missing');

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: window.innerWidth > 760,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(68, 1, 0.1, 40);
  scene.add(camera);

  // Curves sit behind the artwork. Seen from the centre, they suggest a room
  // wrapped around the viewer rather than the outline of an object in front.
  const gridMaterial = new THREE.LineBasicMaterial({
    color: 0x8d8880,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
  });
  const gridGeometries: THREE.BufferGeometry[] = [];
  const addArc = (points: THREE.Vector3[]) => {
    const arcGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const arc = new THREE.Line(arcGeometry, gridMaterial);
    arc.renderOrder = 1;
    scene.add(arc);
    gridGeometries.push(arcGeometry);
  };
  for (const latitude of [-1.05, -0.55, 0, 0.55, 1.05]) {
    addArc(Array.from({ length: 129 }, (_, step) => {
      const longitude = (step / 128) * TWO_PI;
      return new THREE.Vector3(
        Math.cos(latitude) * Math.sin(longitude),
        Math.sin(latitude),
        Math.cos(latitude) * Math.cos(longitude),
      ).multiplyScalar(GRID_RADIUS);
    }));
  }
  for (let meridian = 0; meridian < 10; meridian++) {
    const longitude = (meridian / 10) * TWO_PI;
    addArc(Array.from({ length: 97 }, (_, step) => {
      const latitude = -Math.PI / 2 + (step / 96) * Math.PI;
      return new THREE.Vector3(
        Math.cos(latitude) * Math.sin(longitude),
        Math.sin(latitude),
        Math.cos(latitude) * Math.cos(longitude),
      ).multiplyScalar(GRID_RADIUS);
    }));
  }

  const geometry = new THREE.PlaneGeometry(2.65, 2.65);
  const frameGeometry = new THREE.PlaneGeometry(2.79, 2.79);
  const shadowGeometry = new THREE.PlaneGeometry(3.8, 3.8);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const shadowContext = shadowCanvas.getContext('2d');
  if (!shadowContext) throw new Error('Canvas 2D is unavailable');
  const shadowGradient = shadowContext.createRadialGradient(64, 64, 23, 64, 64, 64);
  shadowGradient.addColorStop(0, 'rgba(20, 18, 16, 0.32)');
  shadowGradient.addColorStop(1, 'rgba(20, 18, 16, 0)');
  shadowContext.fillStyle = shadowGradient;
  shadowContext.fillRect(0, 0, 128, 128);
  const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
  const north = new THREE.Vector3(0, 1, 0);
  const loader = new THREE.TextureLoader();
  const directions: THREE.Vector3[] = [];
  const groups: THREE.Group[] = [];
  const meshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
  const frameMeshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
  const shadowMeshes: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
  const frames: THREE.MeshBasicMaterial[] = [];
  const shadows: THREE.MeshBasicMaterial[] = [];
  const loading = new Map<number, Promise<void>>();
  const textureQueue: number[] = [];
  const aspectRatios: number[] = [];
  const staggers: number[] = [];
  let activeTextureLoads = 0;
  let texturesReady = false;
  let disposed = false;

  albums.forEach((_, index) => {
    const direction = pointOnSphere(index / (albums.length - 1)).direction;
    directions.push(direction);
    aspectRatios.push(1);

    const group = new THREE.Group();
    const stagger = ((index * 7) % 5 - 2) * 0.22;
    staggers.push(stagger);
    group.position.copy(direction).multiplyScalar(GALLERY_RADIUS + stagger);
    const inward = direction.clone().negate();
    const right = new THREE.Vector3().crossVectors(north, inward).normalize();
    const tangentUp = new THREE.Vector3().crossVectors(inward, right).normalize();
    group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, tangentUp, inward));

    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadow.position.z = -0.23;
    shadow.renderOrder = 2;
    group.add(shadow);
    shadowMeshes.push(shadow);
    shadows.push(shadowMaterial);

    const frameMaterial = new THREE.MeshBasicMaterial({
      color: 0xe9e7e1,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
    });
    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.z = -0.025;
    frame.renderOrder = 3;
    group.add(frame);
    frameMeshes.push(frame);
    frames.push(frameMaterial);

    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.72,
      side: THREE.FrontSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    group.visible = false;
    mesh.renderOrder = 4;
    group.add(mesh);
    scene.add(group);
    groups.push(group);
    meshes.push(mesh);
  });

  const ensureTexture = (index: number) => {
    const existing = loading.get(index);
    if (existing) return existing;
    const mesh = meshes[index];
    const promise = loader.loadAsync(`/covers/${albums[index].id}.jpg`)
      .then((texture) => {
        if (disposed) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 4;
        const image = texture.image as { width?: number; height?: number };
        aspectRatios[index] = image?.width && image?.height ? image.width / image.height : 1;
        mesh.material.map = texture;
        mesh.material.needsUpdate = true;
        groups[index].visible = true;
      })
      .catch(() => { groups[index].visible = false; });
    loading.set(index, promise);
    return promise;
  };

  const pumpTextureQueue = () => {
    while (!disposed && activeTextureLoads < 3 && textureQueue.length) {
      const index = textureQueue.shift()!;
      activeTextureLoads++;
      void ensureTexture(index).finally(() => {
        activeTextureLoads--;
        pumpTextureQueue();
      });
    }
  };

  const queueNearbyTextures = (direction: THREE.Vector3, focusIndex: number) => {
    const nearby = directions
      .map((candidate, index) => ({ index, proximity: candidate.dot(direction) }))
      .filter(({ index, proximity }) => index === focusIndex || proximity > 0.37)
      .sort((a, b) => Number(b.index === focusIndex) - Number(a.index === focusIndex)
        || b.proximity - a.proximity)
      .slice(0, 5);
    textureQueue.length = 0;
    textureQueue.push(...nearby.filter(({ index }) => !loading.has(index)).map(({ index }) => index));
    pumpTextureQueue();
  };

  const eased = { value: 0 };
  const pointer = new THREE.Vector2();
  const pointerEased = new THREE.Vector2();
  const lookDirection = new THREE.Vector3();
  const lookTarget = new THREE.Vector3();
  const pointerRotation = new THREE.Quaternion();
  const pointerEuler = new THREE.Euler();
  const scale = new THREE.Vector3();
  const targetPosition = new THREE.Vector3();
  const captionContent = document.querySelector<HTMLElement>('[data-album-caption-content]');
  let activeIndex = -1;
  let frame = 0;
  let visible = !document.hidden;
  let inViewport = true;
  let contextLost = false;
  let targetProgress = 0;

  const updateActiveText = (index: number) => {
    if (index === activeIndex) return;
    const wasInitialized = activeIndex !== -1;
    activeIndex = index;
    const album = albums[index];
    document.querySelectorAll<HTMLElement>('[data-active-year]').forEach((node) => {
      node.textContent = String(album.year);
    });
    document.querySelectorAll<HTMLElement>('[data-active-title]').forEach((node) => {
      node.textContent = album.title;
    });
    document.querySelectorAll<HTMLElement>('[data-active-artist]').forEach((node) => {
      node.textContent = album.artist;
    });
    document.querySelectorAll<HTMLElement>('[data-active-branch]').forEach((node) => {
      node.textContent = album.branch;
    });
    document.querySelectorAll<HTMLElement>('[data-active-intro]').forEach((node) => {
      node.textContent = album.intro;
    });
    if (captionContent && wasInitialized) {
      gsap.fromTo(captionContent,
        { autoAlpha: 0.45, y: 9 },
        { autoAlpha: 1, y: 0, duration: 0.48, ease: 'power2.out', overwrite: true },
      );
    }
  };

  const measure = () => {
    const rect = shell.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1.15 : 1.5));
    renderer.setSize(rect.width, rect.height, false);
    camera.fov = window.innerWidth < 760 ? 78 : 68;
    camera.aspect = rect.width / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  };

  const updateProgress = () => {
    const rect = scrollRoot.getBoundingClientRect();
    const distance = Math.max(scrollRoot.offsetHeight - window.innerHeight, 1);
    const progress = THREE.MathUtils.clamp(-rect.top / distance, 0, 1);
    targetProgress = progress;
    gsap.to(eased, {
      value: progress,
      duration: 1.15,
      ease: 'power2.out',
      overwrite: true,
    });
    if (texturesReady) {
      queueNearbyTextures(pointOnSphere(progress).direction, Math.round(progress * (albums.length - 1)));
    }
    return progress;
  };

  const render = () => {
    frame = 0;
    if (contextLost || !visible || !inViewport) return;

    const progress = eased.value;
    const position = progress * (albums.length - 1);
    const { direction, longitude } = pointOnSphere(progress);
    updateActiveText(Math.round(position));

    pointerEased.lerp(pointer, 0.055);
    pointerEuler.set(-pointerEased.y * 0.045, pointerEased.x * 0.065, 0, 'YXZ');
    pointerRotation.setFromEuler(pointerEuler);
    lookDirection.copy(direction).applyQuaternion(pointerRotation);
    camera.position.set(
      Math.sin(longitude * 0.42) * 0.28,
      Math.sin(progress * TWO_PI) * 0.12,
      Math.cos(longitude * 0.42) * 0.28,
    ).addScaledVector(direction, 0.4);
    lookTarget.copy(lookDirection).multiplyScalar(GALLERY_RADIUS);
    camera.lookAt(lookTarget);

    meshes.forEach((mesh, index) => {
      const focus = THREE.MathUtils.clamp(1 - Math.abs(position - index), 0, 1);
      const targetOpacity = 0.46 + focus * 0.54;
      mesh.material.opacity += (targetOpacity - mesh.material.opacity) * 0.07;
      frames[index].opacity += (0.55 + focus * 0.45 - frames[index].opacity) * 0.07;
      shadows[index].opacity += (0.3 + focus * 0.7 - shadows[index].opacity) * 0.07;
      scale.set(aspectRatios[index], 1, 1);
      mesh.scale.lerp(scale, 0.07);
      shadowMeshes[index].scale.lerp(scale, 0.07);
      frameMeshes[index].scale.lerp(scale, 0.07);
      const targetScale = 0.84 + focus * 0.58;
      groups[index].scale.lerp(scale.setScalar(targetScale), 0.07);
      targetPosition.copy(directions[index]).multiplyScalar(GALLERY_RADIUS + staggers[index] - focus * 0.8);
      groups[index].position.lerp(targetPosition, 0.07);
    });

    renderer.render(scene, camera);
    frame = requestAnimationFrame(render);
  };

  const resume = () => {
    if (!frame && visible && inViewport && !contextLost) frame = requestAnimationFrame(render);
  };
  const onVisibility = () => {
    visible = !document.hidden;
    resume();
  };
  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || window.innerWidth <= 760) return;
    pointer.x = THREE.MathUtils.clamp(event.clientX / window.innerWidth * 2 - 1, -1, 1);
    pointer.y = THREE.MathUtils.clamp(event.clientY / window.innerHeight * 2 - 1, -1, 1);
  };
  const onPointerLeave = () => pointer.set(0, 0);
  const onContextLost = (event: Event) => {
    event.preventDefault();
    contextLost = true;
    shell.dataset.mode = 'static';
    shell.dataset.ready = 'false';
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const observer = new IntersectionObserver(([entry]) => {
    inViewport = entry?.isIntersecting ?? false;
    if (!inViewport) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else {
      resume();
    }
  });
  observer.observe(shell);

  window.addEventListener('resize', measure, { passive: true });
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('visibilitychange', onVisibility);
  canvas.addEventListener('webglcontextlost', onContextLost);

  measure();
  const initialProgress = updateProgress();
  gsap.killTweensOf(eased);
  eased.value = initialProgress;
  const initialIndex = Math.round(initialProgress * (albums.length - 1));
  updateActiveText(initialIndex);
  await ensureTexture(initialIndex);
  shell.dataset.ready = 'true';
  resume();
  texturesReady = true;
  queueNearbyTextures(pointOnSphere(targetProgress).direction, Math.round(targetProgress * (albums.length - 1)));

  return () => {
    disposed = true;
    textureQueue.length = 0;
    cancelAnimationFrame(frame);
    observer.disconnect();
    gsap.killTweensOf(eased);
    if (captionContent) gsap.killTweensOf(captionContent);
    window.removeEventListener('resize', measure);
    window.removeEventListener('scroll', updateProgress);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerleave', onPointerLeave);
    document.removeEventListener('visibilitychange', onVisibility);
    canvas.removeEventListener('webglcontextlost', onContextLost);
    geometry.dispose();
    frameGeometry.dispose();
    shadowGeometry.dispose();
    shadowTexture.dispose();
    gridGeometries.forEach((arcGeometry) => arcGeometry.dispose());
    gridMaterial.dispose();
    meshes.forEach((mesh) => {
      mesh.material.map?.dispose();
      mesh.material.dispose();
    });
    frames.forEach((material) => material.dispose());
    shadows.forEach((material) => material.dispose());
    renderer.dispose();
  };
}
