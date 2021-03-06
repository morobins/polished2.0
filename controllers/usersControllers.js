const db = require('../models');
const User = require('../models/user');

module.exports = {
  // CRUD methods
  findAll: function (req, res) {
    db
      .User
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db
      .User
      .findById(req.user._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findProductById: function (req, res) {
    console.log("finding")
    db
    .User.findOneAndUpdate({
      _id: req.user._id
    }, {
        $pull: {
          userProds: {
            id: req.body.id
          }
        }
      }).then(result => {
        console.log(result)
        res.json(result)
      }).catch(err => {
        console.log(err)
        res.json(err);
      })
  },

  create: function (req, res) {
    db
      .User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log("updating user");
    console.log("body" + JSON.stringify(req.body));
    console.log("user _id" + req.user._id)
    db
    .User.findOneAndUpdate({
      _id: req.user._id
    }, { $push: { userProds: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    console.log("removing");
    db
      .User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  register: function (req, res) {
    /* To create a new user */
    User
      .register(new User({ username: req.body.username }), req.body.password, function (err) {
        if (err) {
          console.log('error while user register!', err);
          return res.json({ error: err });
        }
        console.log('user registered!');
        res.json(true);
      });
  }
};



