const products = [
  { name: "milk", price: 35 },
  { name: "meat", price: 200 },
  { name: "eggs", price: 70 },
  { name: "sugar", price: 34 },
  { name: "butter", price: 60 },
  { name: "cheese", price: 300 },
  { name: "salami", price: 260 },
];

products.sort((a, b) => a.price - b.price);
// products.reverse();
console.log(products);
