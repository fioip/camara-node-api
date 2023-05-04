var express = require("express");
var router = express.Router();
var fs = require("fs");

const DATA_PATH = "data/products.json";

/**
 *
 */
router.get("/", function (req, res, next) {
  console.log("reading file %o", DATA_PATH);
  const products = getProducts();
  res.json(products);
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const name = req.body.name;
  const category = req.body.category;
  const allergens = req.body.allergens;
  const measureUnit = req.body.measureUnit;
  const quantity = req.body.quantity;

  const products = getProducts();
  const id = Math.random().toString(36).substring(7) + new Date().getTime();

  products.push({
    id,
    name,
    category,
    allergens,
    measureUnit,
    quantity
  });

  setProducts(products);

  res.json({ success: true, id });
  res.status(201);
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  const products = getProducts().filter(product => product.id != id);

  setProducts(products);

  res.json({ success: true });
});

/**
 *
 */
router.put("/update", function (req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const category = req.body.category;
  const allergens = req.body.allergens;
  const measureUnit = req.body.measureUnit;
  const quantity = req.body.quantity;

  const products = getProducts();

  const product = products.find(product => product.id == id);
  if (product) {
    product.name = name;
    product.category = category;
    product.allergens = allergens;
    product.measureUnit = measureUnit;
    product.quantity = quantity;
  }

  setProducts(products);

  res.json({ success: true });
});

function getProducts() {
  const content = fs.readFileSync(DATA_PATH);
  return JSON.parse(content);
}

function setProducts(products) {
  const content = JSON.stringify(products, null, 2);
  fs.writeFileSync(DATA_PATH, content);
}

module.exports = router;
