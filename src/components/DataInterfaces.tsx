export interface IItemPosition {
  position?: string;
  width?: number | string;
  height?: number | string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  margin?: number;
  padding?: number;
}

export interface IPortfolioItemData {
  title: string;
  links: Array<IPortfolioItemLink>;
  time: string;
  description: Array<string>;
  type: string;
  language: Array<string>;
  framework: Array<string>;
  image: string;
  score?: number;
}

interface IPortfolioItemLink {
  title: string;
  href: string;
}
