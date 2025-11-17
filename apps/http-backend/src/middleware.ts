import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import JWT_SECRET from "./config.js";

export async function middleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"] ?? ""; // usse jo hota hai wo like string hoga ya fir undefined khuud s handle kar lega okkh!..

  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload; // ye type assertion hai okkh isse mai ye fix kar deta hu like ki yahi type hoga iska okkh!..

  // iske nadar kya ayega ??

  if (decoded) {
    (req as any).userId = decoded.userId; // yha p hamm hitesh sir n jaise karaya tha waise kar liyo ek bar pura code okkh!..
    next();
  } else {
    res.json("decode mai kuch galatiya hai okkh!");
  }
}

// agar aise nicche ... kisi k lag rha hai to smjh le wo promises nahi hai okh!.

// dekh req k andar body hota hai params hota hai query hota hai headers hota hai and cokkies hota hai okkh! isse zada kuch nahi hota thik hai na..
// but hamm req.userId de rahe hai to isme kcuh galati ho sakti hai okkh!..
