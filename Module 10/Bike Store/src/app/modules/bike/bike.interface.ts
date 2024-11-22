export interface IBike {
    _id?: string;
    name: string;
    brand: string;
    price: number;
    category: string;
    description: string;
    quantity: number;
    inStock: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  