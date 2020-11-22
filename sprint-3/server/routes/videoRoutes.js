const express = require("express");
const route = express.Router();
const uniqueId = require("uniqid");
const fs = require("fs");

const readFileSync = () => {
  return JSON.parse(fs.readFileSync("./data/db.json"));
};

const writeFileSync = (data) => {
  return fs.writeFileSync("./data/db.json", JSON.stringify(data, null, 4));
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

route.get("/", (req, res) => {
  res.status(200).json(sideVideos(readFileSync()));
});

route.get("/:videoId", (req, res) => {
  res.status(200).json(mainVideo(req.params.videoId, readFileSync()));
});

route.post("/:videoId/comments", (req, res) => {
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
  writeFileSync(data);
  res.status(200).json(comment);
});

route.delete("/:videoId/comments/:commentId", (req, res) => {
  const data = readFileSync();
  const videoIndex = data.findIndex((item) => item.id === req.params.videoId);
  const commentIndex = data[videoIndex].comments.findIndex(
    (item) => item.id === req.params.commentId
  );
  const deletedComment = data[videoIndex].comments.splice(commentIndex, 1);
  writeFileSync(data);
  res.status(200).json(deletedComment);
});

route.put("/:videoId/comments/:commentId", (req, res) => {
  const data = readFileSync();
  const videoIndex = data.findIndex((item) => item.id === req.params.videoId);
  const commentIndex = data[videoIndex].comments.findIndex(
    (item) => item.id === req.params.commentId
  );
  data[videoIndex].comments[commentIndex].likes++;
  writeFileSync(data);
  res.status(200).json({ message: "like added successfully" });
});

route.post("/", (req, res) => {
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

route.put("/:videoId", (req, res) => {
  const data = readFileSync();
  const videoIndex = data.findIndex((item) => item.id === req.params.videoId);
  data[videoIndex].likes++;
  writeFileSync(data);
  res.status(200).json({ message: "like added successfully" });
});

module.exports = route;
