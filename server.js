const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./src/models");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define any API routes before this runs
app.get("/api/books", (req, res) => {
    db.Book.find({})
    .then((dbBook) => {
        res.json(dbBook);
    })
    .catch((err)=>{
        res.json(err);
    });
});
app.post("/api/books", (req, res) => {
    db.Book.create({})
    .then((dbBook) => {
        res.json(dbBook);
    })
    .catch((err)=> {
        res.json(err);
    })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});