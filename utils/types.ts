export interface ProductAttributes {
  name: string;
  slug: string;
  description: string;
  sub_name: string;
  price: number;
  product_id: string;
  original_price: number;
  size: {
    data: {
      size: string;
      enabled: boolean;
    };
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  thumbnail: {
    data: {
      id: number;
      attributes: {
        url: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
      };
    };
  };
  image: any;
  categories: any;
}
export interface Product {
  id: number;
  attributes: ProductAttributes;
}
export interface Category {
  id: number;
  attributes: CategoryAttributes;
}
export interface CategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: {
    data: Product[];
  };
}
