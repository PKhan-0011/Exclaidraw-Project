import { WebSocketServer, WebSocket } from "ws";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/JWT_SECRET";

const wss = new WebSocketServer({ port: 8080 });

type User = {
  socket?: WebSocket;
  rooms: Array<string>;
  decode: JwtPayload;
};

const users: Array<User> = [];

wss.on("connection", (socket: WebSocket, request) => {
  const url = request.url; // ws.//localhost:3000?userName=Parvej

  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  // to yha p ek array banega yha p like [ws.//loocalhost:8080], [userNam=3000];

  const token = queryParams.get("token") ?? "";

  const decode = jwt.verify(token, JWT_SECRET) as JwtPayload;

  console.log(decode);

  if (!decode || !decode.userId) {
    // agar decode m kuch galati hui hai and userId nahi aya hai to mai webSocket close katr dunag okkh!.
    wss.close();
    return null;
  }

  users.push({
    decode,
    rooms: [],
    socket,
  });

  // ye ho to glt rha hai but still ek bar sahi s kar liyo okkh!..

  socket.on("messages", (message) => {
    const parsedData = JSON.parse(message as string); // ye object m banega okkh!..

    if (parsedData.type === "join_room") {
    }
  });
});

// yha p hamm like signelton ka use karenge like pehle okkh!
// singleton jo hai wo like array hai ek simple okkh!..
