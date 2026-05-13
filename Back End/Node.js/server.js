const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Tomato",
    price: 100
  },
  {
    id: 2,
    name: "Potato",
    price: 80
  }
];
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/order", (req, res) => {
  res.json({
    message: "Order received successfully"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
