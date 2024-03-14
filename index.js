const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
// app.get('/',(req,res)=>{
//     // res.send("Hello World!");
//     res.status(200).json({message:"Hello World!"});
// })

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
