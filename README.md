# node-api

Node JS CRUD API Example

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Usage](#usage)
- [JSON file as storage](#json-file-as-storage)
- [DB (MySQL) as storage](#db-mysql-as-storage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
git clone
cd node-api
npm install
```

## Usage

```sh
npm start
# or (when you work inside code and want auto restart)
npm run devstart
```

Open http://localhost:3000 to see if it works

## JSON file as storage

Products are stored inside [data/products.json](data/products.json)

```js
// GET products-json
fetch("http://localhost:3000/products-json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
});

// POST products-json/create
fetch("http://localhost:3000/products-json/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "porumb",
    category: "conserve",
    allergens: "nu",
    measureUnit: "grame",
    quantity: "200"
  })
});

// DELETE products-json/delete
fetch("http://localhost:3000/products-json/delete", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ id: "fedcba1610309909431" })
});

// PUT products-json/update
fetch("http://localhost:3000/products-json/update", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: "fedcba1610310163146",
    name: "porumb",
    category: "conserve",
    allergens: "nu",
    measureUnit: "grame",
    quantity: "200"
  })
});
```
