import images from './images';

const wines = [
  {
    title: 'Fratelli Sette',
    price: '₹1,200',
    tags: 'AU | Bottle',
  },
  {
    title: 'Grover Zampa La Reserve',
    price: '₹1,500',
    tags: 'AU | Bottle',
  },
  {
    title: 'Four Seasons Barrique Reserve Cabernet',
    price: '₹900',
    tags: 'FR | 750 ml',
  },
  {
    title: 'York Arros',
    price: '₹1,000',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Goa Kings Beer',
    price: '₹1500',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Mango Mojito',
    price: '₹250 - ₹350',
    tags: 'Rum, fresh mango, mint, lime, sugar, soda|30 ml',
  },
  {
    title: "Masala Chai Martini",
    price: '₹300 - ₹400',
    tags: 'Vodka, chai tea, simple syrup, cinnamon.',
  },
  {
    title: 'Kokum Margarita',
    price: '₹350 - ₹450',
    tags: 'Tequila, kokum syrup, lime juice, triple sec.',
  },
  {
    title: 'Tamarind Whiskey Sour',
    price: '₹250 - ₹350',
    tags: 'White rum, betel leaves, mint, lime, sugar, soda.',
  },
  {
    title: 'Jaljeera Gin Fizz',
    price: ' ₹300 - ₹400',
    tags: 'Gin, jaljeera syrup, lemon, soda.',
  },
];

const awards = [
  {
    imgUrl:images.award01,
    title: 'Culinary Excellence Award:',
    subtitle: 'Exemplary flavors redefine the dining experience.',
  },
  {
    imgUrl: images.award02,
    title: 'Innovative Menu Design Recognition:',
    subtitle: 'Bold, creative dishes captivate discerning palates.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Service Accolade:',
    subtitle: 'Impeccable hospitality elevates every dining encounter.',
  },
  {
    imgUrl:images.award05,
    title: 'Sustainable Dining Initiative Honors:',
    subtitle: 'Pioneering eco-friendly practices for a greener future.',
  },
];

export default { wines, cocktails, awards };