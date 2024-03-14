const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(
      "Connected to the MongoDb Database Successfully!",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    proccess.exit(1);
  }
};
module.exports = connectDb;
