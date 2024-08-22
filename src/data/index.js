export const products = [
  {
    id: 1,
    name: 'Royal Milk Tea',
    price: 4.8,
    toppings: ['Milk Foam', 'White Pearl'],
    code: 'MT-01',
  },
  {
    id: 2,
    name: 'Green Milk Tea',
    price: 4.6,
    toppings: ['Pearl'],
    code: 'MT-02',
  },
  {
    id: 3,
    name: 'Oolong Milk Tea',
    price: 5.1,
    toppings: ['Pearl', 'Milk Foam'],
    code: 'MT-03',
  },
  {
    id: 4,
    name: 'Blueberry Milk Tea',
    price: 5.1,
    toppings: ['Pearl', 'Milk Foam'],
    code: 'MT-04',
  },
  {
    id: 5,
    name: 'Mango Milk Tea',
    price: 5.1,
    toppings: ['Aloe', 'Pearl'],
    code: 'MT-05',
  },
];

export const stores = [
  {
    id: 1,
    name: 'Ding Tea',
    products: [1, 2, 3, 4],
    trending: [1, 3],
  },
  {
    id: 2,
    name: 'Tocotoco',
    products: [2, 5],
    trending: [2],
  },
  {
    id: 3,
    name: 'Gongcha',
    products: [1, 3, 5],
    trending: [3],
  },
  {
    id: 4,
    name: 'LeeTee',
    products: [1, 4, 5],
    trending: [4, 5],
  },
];

export const sortList = [
  {
    name: 'Name (Asc)',
    value: 'asc',
    type: 'name',
  },
  {
    name: 'Name (Dsc)',
    value: 'dsc',
    type: 'name',
  },
  {
    name: 'Price (Asc)',
    value: 'asc',
    type: 'price',
  },
  {
    name: 'Price (Dsc)',
    value: 'dsc',
    type: 'price',
  },
];
