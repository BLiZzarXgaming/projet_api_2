const express = require("express");
const app = express();

app.use(express.json());
app.use("/api", require("./routes/api/converter.js"));

app.all("/*", (req, res) => {
  res.status(404).send("La route n'existe pas!");
});

app.listen(80, () => console.log("Server started"));
