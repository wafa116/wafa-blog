const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/wafa-blog/browser"));

app.listen(process.env.PORT || 4200);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/wafa-blog/browser/index.html"));
});


console.log("App is listenning!");