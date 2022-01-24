import express from "express";

const app = express();
const PORT = 5000;

//Statoc files
app.use(express.static("public"));

//set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Navigation
app.get("", (req, res) => {
  res.render("index", { text: "Hey" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

//listen on port
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
