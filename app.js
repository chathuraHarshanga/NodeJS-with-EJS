import express from "express";
import bodyParser from "body-parser";
import { check, validationResult } from "express-validator";

const app = express();
const PORT = 5000;

//Statoc files
app.use(express.static("public"));

//set views
app.set("views", "./views");
app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Navigation
app.get("", (req, res) => {
  res.render("index", { text: "Hey" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post(
  "/register",
  urlencodedParser,
  [
    check("username", "This username must me 3+ characters long")
      .exists()
      .isLength({ min: 3 }),
    check("email", "Email is not valid").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(422).jsonp(errors.array())
      const alert = errors.array();
      res.render("register", {
        alert,
      });
    }
  }
);

//listen on port
app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
