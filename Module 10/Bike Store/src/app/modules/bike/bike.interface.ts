export type IBike = {
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export interface IOrder {
  email: string;
  product: string;  
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}