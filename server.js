// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const compression = require('compression');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "coil picker", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(compression({ filter: shouldCompress }))

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
// Requiring our routes
// require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
