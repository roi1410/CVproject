const Users = require("../models/usersModel");
exports.createUser = async (req, res) => {
  try {
    const answer = await doesUsernameExist(req.body.username);
    if (!answer) {
      const newUsers = await Users.create(req.body);
      return res.send(newUsers);
    }
    return res.send("User already exists");
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userID = req.params.id;

    const UsersObject = await Users.findById(userID);

    if (!UsersObject) {
      return res.status(404).send("User not found");
    }

    res.send(UsersObject);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const UsersCursor = await Users.collection.find();
    const UsersArray = await UsersCursor.toArray();

    res.send(UsersArray);
  } catch (error) {
    console.error("Error fetching all Users:", error);
    res.status(500).send("Internal Server Error");
  }
};
exports.Signin = async (req, res) => {
  const usernameexist = await doesUsernameExist(req.body.username);
  if (usernameexist && usernameexist.password == req.body.password) {
    console.log(usernameexist);
    res.status(200).json({
      success: true,
      message:usernameexist,
    });
    // usernameexist.password == req.body.password ? res.send(usernameexist) : res.send("Password is not correct");
  } else res.send("Username or password are invalid");
};

exports.deleteAllUsers = async (req, res) => {
  Users.collection
    .drop()
    .then(() => {
      res.send("Users collection dropped");
    })
    .catch((error) => {
      res.send("Error dropping Users collection:", error);
    });
};
exports.editUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Users.findByIdAndUpdate(id, {
      username: req.body?.username,
      password: req.body?.password,
      email: req.body?.email,
    });

    if (result) {
      res.send("User edited successfully.");
    } else {
      res.send("User not found or not edited.");
    }
  } catch (error) {
    console.error("Error editing User:", error);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Users.deleteOne({ _id: id });

    if (result.deletedCount === 1) {
      return res.send("User deleted successfully.");
    } else {
      return res.send("User not found or not deleted.");
    }
  } catch (error) {
    console.error("Error deleting User:", error);
    res.status(500).send("Internal Server Error");
  }
};

async function doesUsernameExist(username) {
  try {
    const existingUser = await Users.findOne({ username });
    if (existingUser) {
      return existingUser;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking name existence:", error);
    return false;
  }
}
