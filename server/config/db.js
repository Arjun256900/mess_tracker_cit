import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb");
  } catch (err) {
    console.log("Error : " + err.msg);
    process.exit(1);
  }
};

export default connectDb;