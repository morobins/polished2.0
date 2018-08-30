const Product = require("../models/product");

// Defining methods for the productsController
module.exports = {
  findAll: function (req, res) {

    console.log({ ...req.query });

    const searchTerms = {};

    if (req.query.brand) {
      searchTerms.brand = req.query.brand
    }
    if (req.query.product_name) {
      searchTerms.product_name = req.query.product_name
    }
    if (req.query.color) {
      searchTerms.color = req.query.color
    }
    if (req.query.category) {
      searchTerms.category = req.query.category
    }

    Product
      .find(searchTerms)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("hit da route")
    console.log(req.body)

    Product
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function (req, res) {
    Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};