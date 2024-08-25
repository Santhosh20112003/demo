const express = require("express");
const app = express();

app.use(express.json());

app.get("/getalldetails", (req, res) => {
  const list = [{ name: "ajay" }, { name: "gaja" }, { name: "priya" }];
  res.json(list);
});

app.post("/login", (req, res) => {
  const email = "santhosh@gmail.com";
  const pass = "Santhosh@123";
  const emailid = req.body.email;
  const password = req.body.password;
  if (email == emailid && pass == password) {
    res.status(200).json({email:emailid,password:password});
  } else {
    res.status(404).json("Login Failed");
  }
});

app.listen(3000, () => {
  console.log("Running");
});
