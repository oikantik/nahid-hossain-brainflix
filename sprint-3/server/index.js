const express = require("express");
const app = express();
const cors = require("cors");
const uniqueId = require("uniqid");
const fs = require("fs");

const readFileSync = () => {
  return JSON.parse(fs.readFileSync("./database/db.json"));
};

const writeFileSync = (data) => {
  return fs.writeFileSync("./database/db.json", JSON.stringify(data));
};

const sideVideos = (data) => {
  return data.map((item) => {
    return {
      id: item.id,
      channel: item.channel,
      title: item.title,
      image: item.image,
    };
  });
};

app.use(cors());
app.use(express.json());
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the api",
  });
});

app.get("/videos", (req, res) => {
  res.status(200).json(sideVideos(readFileSync()));
});

app.listen(process.env.PORT || 7811, () => {
  console.log("Server started");
});
