// Portfolio Items Data Types
export type PortfolioItemType = {
  order: number;
  category: string;
  action: {
    type: string;
    number: number;
  };
  description: {
    text: string;
    caption: string;
  };
  images: {
    src: string;
    alt: string;
  };
  detail: {
    sub: string;
    link: string;
    imagesDetail: 
      {
        src: string;
        alt: string;
      }[]; // Change this to an array
  };
};
