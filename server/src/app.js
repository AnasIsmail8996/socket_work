import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { dbConnect } from "./db/config.js";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

dbConnect();

// 👇 HTTP server
const server = http.createServer(app);

// 👇 Socket server
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Client message:", data);

    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ✅ IMPORTANT: listen server, not app
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
