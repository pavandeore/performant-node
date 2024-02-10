const express = require("express");

const app = express();

const users = require("./users.json");

const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "request.log" }),
  ],
});

const PORT = 7000;

app.use(express.json());

app.get("/users", (req, res) => {
  logger.info(
    `${new Date().toISOString()} - ${req.method} - ${
      req.originalUrl
    } - ${JSON.stringify(req.query)}`
  );
  res.json({ data: users });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
