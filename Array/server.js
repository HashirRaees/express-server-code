const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORt;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var arr = [
  {
    email: "user1@gmail.com",
    password: "1234",
  },
  {
    email: "user2@gmail.com",
    password: "1234",
  },
  {
    email: "user3@gmail.com",
    password: "1234",
  },
  {
    email: "user4@gmail.com",
    password: "1234",
  },
  {
    email: "user5@gmail.com",
    password: "1234",
  },
  {
    email: "user6@gmail.com",
    password: "1234",
  },
  {
    email: "user7@gmail.com",
    password: "1234",
  },
  {
    email: "user8@gmail.com",
    password: "1234",
  },
  {
    email: "user9@gmail.com",
    password: "1234",
  },
  {
    email: "user10@gmail.com",
    password: "1234",
  },
];

app.post("/login", (req, res, next) => {
  const {email} = req.body;

 const user = arr.find((u) => u.email === email);

 if (user){
    res.send('Login failed')
 }
 else{
    res.send('Login Successfull')
 }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
