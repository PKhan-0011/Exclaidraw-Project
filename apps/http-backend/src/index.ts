import express from "express";
import jwt from "jsonwebtoken";

import { middleware } from "./middleware.js";
import {
  createUserSchema,
  createSignInSchema,
  createRoomSchema,
} from "@repo/common/types";

import { prismaUser } from "@repo/db/client";

// abb yha s mai actlly sari chize check kar sakta hu like ki dbcall jo bhi the wo sabbokkh!..

import { JWT_SECRET } from "@repo/backend-common/JWT_SECRET";

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

// agar mughe chize put karni hongi dataBase m to mai create kar dunga and syntax kuch aisa hoga
// create({data: {isme data chla jayega sara appka okkH!,,}}); // data: isme data sara rakh do okh!,,
// find({where: {isme comoarsion wala hota hiai okkh!}}); // find me simple hota gau like find karna to kisis bhi ek id s mai find kar lunga okkh!..
// upadte(where: {}, data: {}); // pehle id check karna padega then uske badd kya update karna hai wo karna padega okh!..
// delete(where: {}) // ye pura row hi delete karr dega that's why where hi use kiya gya hai yha p okkh!..
