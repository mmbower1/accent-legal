const express = require("express"); // express
const app = express();
// Allow cross-origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
const bodyParser = require("body-parser");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const prettier = require("prettier");
const parser = require("prettier/parser-babel");
var PORT = process.env.PORT || 5000;
dotenv.config({ path: "./config/config.env" });

// Blocked by CORS policy: Request header field x-auth-token is not
// allowed by Access-Control-Allow-Headers in preflight response.
app.use(cors());

// connect mongo
connectDB();

// dotenv
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  // load env vars. this goes before route files so api works
  dotenv.config({ path: "./config/config.env" });
}

// bodyparser middleware, handles http requests
app.use(bodyParser.urlencoded({ extended: true }));

// init middleware. Allows req to not return undefined
app.use(express.json({ extended: false }));

// shows logs of CRUD requests in terminal.
app.use(morgan("dev"));

// cookie parser
app.use(cookieParser());

// middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// access routes
// app.use("/about", require("./routes/about"));
// app.use("/citizenship", require("./routes/citizenship"));
// app.use("/consultation", require("./routes/consultation"));
app.use("/contact", require("./routes/contact"));
// app.use("/deportation", require("./routes/deportation"));
// // app.use("/error", require("./routes/error"));
// app.use("/green-cards", require("./routes/green-cards"));
// app.use("/work-permit", require("./routes/work-permit"));
//

// heroku
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// has to be after 'access routes' to work
app.use(errorHandler);

app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () =>
  console.log(`>>> accent legal Server started on port ${PORT}`.brightBlue.bold)
);
