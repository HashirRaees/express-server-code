const mongoose = require("mongoose");
const { Schema } = require("../schema/schema");

mongoose
  .connect(
    "mongodb+srv://Hashir47:hashir@cluster0.ytybpnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

let userData = [
  {
    name: "Hashir",
    email: "hashir@gmail.com",
    pass: "12345",
  },
  {
    name : "Raees",
    email: "raees@gmail.com",
    pass: "54321",
  },
];

function auth(req, res, next) {
  // console.log(req.ahmer);
  res.send("hello world!!!");
}
async function signup(req, res, next) {
   try {
    const { name, email, password } = req.body;
    const newUser = Schema({ name, email, password });
    await newUser.save(); // Inserts a new document
    // console.log(req.ahmer);
    res.send({
      status : 200,
      message : "User has been created",
    });
  } catch (err) {
    res.send({
      status: 500,
      message: "server code is failed",
      err,
    });
  }
}

function login(req, res, next) {
  const { userEmail, password } = req.body;
  let isFound = false;
  console.log(userEmail);
  console.log(password);
  if (password.length < 5) {
    return res.send("password length must be at least 5");
  }
  for (var i = 0; i < userData.length; i++) {
    if (userEmail === userData[i].email && password === userData[i].pass) {
      isFound = true;
      return res.send({
        status: 200,
        message: "login successfully",
      });
    }
  }

  if (isFound === false) {
    res.send({
      status: 404,
      message: "User Not found",
    });
  }
}

module.exports = { auth, login, signup };
