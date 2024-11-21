import express from 'express';

const app = express();

// Mock product data
const products = [
  { id: 1, name: 'Brown-colored wig', price: "N7,500", location: 'Portharcourt, Rivers State', },
  { id: 2, name: 'Leather Sandals', price: "N2,500", location: 'Zoatong, Kaduna State', },
  { id: 3, name: 'Leather Chair', price:  "Donation", location: 'Victoria Island, Lagos State', },
  { id: 4, name: 'White printed blouse', price: "Donation", location: 'FCT, Abuja', },
  { id: 5, name: 'Fancy Chair', price: "N10,500", location: 'Akure, Ondo State', },
  { id: 6, name: 'Gold-plated jewellery', price: "Donation", location: 'Victoria Island Lagos State', },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

const port = process.env.PORT || 99000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});




