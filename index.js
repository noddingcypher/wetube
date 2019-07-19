import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => {
  console.log("Home request");
  res.send("Hello from Home");
};

const handleProfile = (req, res) => {
  console.log("get profile request");
  res.send("You are on my profile");
}; //arrow function

const betweenHome = (req, res, next) => {
  console.log("I am between");
  next();
};
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
