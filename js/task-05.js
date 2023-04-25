const products = [
  { name: "milk", price: 35 },
  { name: "meat", price: 200 },
  { name: "eggs", price: 70 },
  { name: "sugar", price: 34 },
  { name: "butter", price: 60 },
  { name: "cheese", price: 300 },
  { name: "salami", price: 260 },
];

const myProducts = products.filter(
  (product) => product.price >= 40 && product.price <= 280
);

const discountedPrice = myProducts.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});
console.log(myProducts);
console.log(discountedPrice);
