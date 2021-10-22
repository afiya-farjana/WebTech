import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
    name: 'Anny', 
    email: 'admin@gmail.com',
    password : bcrypt.hashSync('1234', 8),
    isAdmin: true,
  },
    {
      name: 'Farjana',
    email: 'user@example.com',
    password : bcrypt.hashSync('abcd', 8),
    isAdmin: false,
    }
  ],
    products: [
      {
        name: 'Snickers',
        category: 'Chocolate',
        image: '/images/p1.jpg',
        price: 60,
        countInStock: 10,
        brand: 'snickers',
        rating: 4.5,
        numReviews: 10,
        description: 'It is a description',
      },
      {
        name: 'Kitkat',
        category: 'Chocolate',
        image: '/images/p2.jpg',
        price: 185,
        countInStock: 20,
        brand: 'Nestlé',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        name: 'Apple',
        category: 'Fruits',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Non-brand',
        rating: 4.8,
        numReviews: 17,
        description: 'Weight: 1 kg',
      },
      {
        name: 'Guava',
        category: 'Fruits',
        image: '/images/p4.jpg',
        price: 120,
        countInStock: 15,
        brand: 'Local',
        rating: 4.5,
        numReviews: 14,
        description: 'Weight: 1kg',
      },
      {
        name: 'Mango',
        category: 'Fruits',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Local',
        rating: 4.5,
        numReviews: 10,
        description: 'Weight: 1kg',
      },
      {
        name: 'Dairy Milk Silk',
        category: 'Chocolate',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Cadberry',
        rating: 4.5,
        numReviews: 15,
        description: 'Chocolate choco',
      },
    ],
  };
  export default data;
  