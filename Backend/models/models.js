const mongoose = require("mongoose");

const UsersCVSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["gest", "premium", "nonPremium", "admin"],
  },
  password: {
    type: String,
    required: true,
  },
});

const UsersCV = mongoose.model("UsersCV", UsersCVSchema);
module.exports = UsersCV;
