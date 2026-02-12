const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORt;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var arr = [
  {
    email: "user1@gmail.com",
    password: "1235",
  },
  {
    email: "user2@gmail.com",
    password: "1236",
  },
  {
    email: "user3@gmail.com",
    password: "1237",
  },
  {
    email: "user4@gmail.com",
    password: "1238",
  },
  {
    email: "user5@gmail.com",
    password: "1239",
  },
  {
    email: "user6@gmail.com",
    password: "1240",
  },
  {
    email: "user7@gmail.com",
    password: "1241",
  },
  {
    email: "user8@gmail.com",
    password: "1242",
  },
  {
    email: "user9@gmail.com",
    password: "1243",
  },
  {
    email: "user10@gmail.com",
    password: "1244",
  },
];

app.post("/login", (req, res, next) => {
  const { userEmail, userPass } = req.body;
  let isFound = false;
  for (var i = 0; i < arr.length; i++) {
    if (userEmail === arr[i].email && userPass === arr[i].password) {
      isFound = true;
      return res.send({
        status: 200,
        message: "Login successfull",
      });
    }
    if (isFound === false) {
      res.send({
        status: 404,
        message: "User not found",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
