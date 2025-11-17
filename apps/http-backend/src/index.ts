import express from "express";
import jwt from "jsonwebtoken";
import JWT_SECRET from "./config.js";
import { middleware } from "./middleware.js";

const app = express();
app.use(express.json());

app.post("/signUp", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.LastName;
  const email = req.body.email;
});

app.post("/signIn", (req, res) => {
  // agar yha p hamm signIn wala logic likh rahe hai agar to yha p hamm

  // Yha p hamm pehle ye bhi chcek kar rahe hote hai like ki
  // user jo hai wo dataBase n hai bhi ya nhai okkh..

  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);
  console.log(token);

  // aur token k andar  userId and JWT_SECRET ayega okh!.
  res.json({
    token,
  });

  // yye jo hai ye frontend p bhej diya hai ya fir ye localStorage m chla jayega okkh!.

  // Yha s backend p data chla jayega okkh!..
});

app.post("/roomId", middleware, (req, res) => {});

app.listen(3001);

// Update the turbo-config in both the projects..
