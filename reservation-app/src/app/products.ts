export type Product = {
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    name: 'ProductA',
    price: 800,
    description: 'ProductA Description'
  },
  {
    name: 'ProductB',
    price: 300,
    description: 'ProductB Description'
  },
  {
    name: 'ProductC',
    price: 1200,
    description: 'ProductC Description'
  }
];
