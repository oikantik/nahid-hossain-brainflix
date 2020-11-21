const express = require("express");
const app = express();
const cors = require("cors");
const uniqueId = require("uniqid");
const fs = require("fs");

const readFileSync = () => {
  return JSON.parse(fs.readFileSync("./database/db.json"));
};

const writeFileSync = (data) => {
  return fs.writeFileSync("./database/db.json", JSON.stringify(data, null, 4));
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

const mainVideo = (videoId, data) => {
  return data.find((item) => item.id === videoId);
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

app.get("/videos/:videoId", (req, res) => {
  res.status(200).json(mainVideo(req.params.videoId, readFileSync()));
});

app.get("/videos/:videoId/comments", (req, res) => {
  const data = readFileSync();
  const videoIndex = data.findIndex((item) => item.id === req.params.videoId);
  const comment = {
    id: uniqueId(),
    name: req.body.name,
    comment: req.body.comment,
    timestamp: req.body.timestamp,
    likes: req.body.likes,
  };
  data[videoIndex].comments.push(comment);
  // video.comments.push something.
  // then how do I add the video back to that position?
  // add error paths
  writeFileSync(data);
  res.status(200).json(comment);
});

app.post("/videos", (req, res) => {
  const data = readFileSync();
  const video = {
    id: uniqueId(),
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: req.body.views,
    likes: req.body.likes,
    duration: req.body.duration,
    video: req.body.video,
    timestamp: req.body.timestamp,
    comments: req.body.comments,
  };
  data.push(video);
  writeFileSync(data);
  res.status(200).json(video);
});

app.listen(process.env.PORT || 7811, () => {
  console.log("Server started");
});
