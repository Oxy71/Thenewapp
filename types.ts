
export interface Product {
  id: string;
  name: string;
  category: 'Desi' | 'Western';
  subCategory: string;
  price: number;
  imageUrl: string;
  tag?: string;
  description: string;
  backstory?: string;
  points: number;
}

export interface Collection {
  id: string;
  name: string;
  category: 'Desi' | 'Western';
  itemCount: number;
  imageUrl: string;
  trending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export enum AppRoute {
  Home = '/',
  Shop = '/shop',
  Collections = '/collections',
  Custom = '/custom',
  Community = '/community',
  Product = '/product/:id',
  Cart = '/cart'
}
