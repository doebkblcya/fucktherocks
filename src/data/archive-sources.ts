import archive from '../../docs/materials/raw/cong-ling-kaishi-shuo-yaogun/manifest.json';

type ArchiveArticle = {
  position: number;
  title: string;
  source_url: string;
};

const articles = new Map<number, ArchiveArticle>(
  archive.articles.map((article) => [article.position, article]),
);

export function getArchiveArticles(positions: number[]): ArchiveArticle[] {
  return positions.map((position) => {
    const article = articles.get(position);
    if (!article) throw new Error(`Unknown archive article: ${position}`);
    return article;
  });
}
