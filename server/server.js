import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

// app.use("/api/auth", )

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
