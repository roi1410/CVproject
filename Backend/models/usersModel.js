const mongoose = require("mongoose"); // npm i mongoose.
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password:
  {
    type: String,
    required: true,
  },
  email:
  {
    type: String,
    required: false,
  },
  cv:
  {
    type: [Object],
    required: true,
  }
});
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
