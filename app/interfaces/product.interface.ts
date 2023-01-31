export interface Characteristic {
  name: string;
  value: string;
}

export interface Blog {
  text: string;
  _id: string;
  bigImage: string;
}

export interface RootObject {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: Characteristic[];
  advantages: string;
  initialRating: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  blog: Blog;
  companyId: string;
  clicks: number;
  reviews: any[];
  reviewCount: number;
  reviewAvg?: any;
}
