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
      message:{username:validUser.username, email:validUser.email, _id:validUser._id,cv:validUser.cv},
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
   
    res.status(200).json({success:answer,message:token});
  } catch (error) {
    res.status(500).json({ message: error.message || "An error occurred." });
  }
};
exports.GetAllCV = async (req,res) => {
  try{
  const id = req.params.id;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }
  const decoded = jwt.verify(token, process.env.SECRET);
  const answer = decoded._id == id;
  if(answer) //verifed
  {
    const user = await Users.findById(id);
    res.status(200).json(user.cv);
  }
  else
  {
    res.status(404).json({message:"Token is not valid"})
  }
}
catch(e)
{
  res.status(500).json({message:e.message || "an error occurred"});
}
}
exports.AddCV = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found",type:'error' });
    }
    const newCVData = req.body;
    user.cv.push(newCVData);
    const updatedUser = await user.save();
    res.status(200).json({ message: "CV added successfully", user: updatedUser, type:'info' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message || "An error occurred.", type:'error' });
  }
};

exports.deleteCVByIndex = async (req, res) => {
  const userId = req.params.id;
  const cvIndex = req.params.index;

  try {
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cvArray = user.cv;

    if (cvIndex < 0 || cvIndex >= cvArray.length) {
      return res.status(400).json({ message: "Invalid CV index" });
    }

    cvArray.splice(cvIndex, 1);

    const updatedUser = await user.save();
    res.status(200).json({ message: "CV deleted successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
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
