const UsersCV = require("../models/models");

const { error } = require("console");

exports.AllContact = async (req, res) => {
  try {
    const allContacts = await UsersCV.find({});
    res.send(allContacts);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.createUsersCV = async (req, res) => {
    try {
      const newUsersCV = await UsersCV.create(req.body);
      res.send(newUsersCV);
    } catch (error) {
      res.send(error);
    }
  };
