const express = require("express");
const mongoose = require("mongoose");

// set up dependencies
const app = express();
// set up mongoose
const uri =
  "mongodb+srv://dbTelegram:H70vkSaEGlewTK3H@cluster0.al5iq.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database");
  });

app.use("/posts", require("./routes/post.route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
