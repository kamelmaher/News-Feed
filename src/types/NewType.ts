/** @format */

export type NewType = {
  title: string;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  url: string;
  urlToImage: string;
};
type Source = {
  name: string;
};
