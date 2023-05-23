const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
// connecting to mongoDB atlas
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DataBase :: MongoDB");
};
module.exports = connectDB;
