const Users = require("../models/usersModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 11;
exports.createUser = async (req, res) => {
  try {
    const userexist = await Users.findOne({ username:req.body.username });
    if (!userexist) {
      let usertosave ={username:req.body.username, email:req.body.email}
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      usertosave.password = hashedPassword;
      const newUser = await Users.create(usertosave);
      const token = jwt.sign({ _id: newUser._id }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60000,
        sameSite: "strict",
      });
      return res.send(newUser);
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
  const validUser = await ValidUser(req.body);
  if (validUser) {
    const token = jwt.sign({ _id: validUser._id }, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60000,
      sameSite: "strict",
    });
    res.status(200).json({
      success: true,
      message:{username:validUser.username, email:validUser.email, _id:validUser._id},
    });
  } else res.status(200).json({
    success: false,
    message:'Username or password ivalid',
  });;
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
exports.authenticate = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }


    const decoded = jwt.verify(token, process.env.SECRET);
    const answer = decoded._id == req.params.id;
   
    console.log(decoded._id, req.params.id,'a')
    res.status(200).json({success:answer,message:token});
  } catch (error) {
    res.status(500).json({ message: error.message || "An error occurred." });
  }
};
async function ValidUser(recievedUser) {
  try {
    const existingUser = await Users.findOne({ username:recievedUser?.username });
    if(existingUser)
    if (await bcrypt.compare(recievedUser.password, existingUser?.password)) {
      return existingUser;
    }
    return false;
  } catch (error) {
    console.error("Error checking name existence:", error);
    return false;
  }
}
