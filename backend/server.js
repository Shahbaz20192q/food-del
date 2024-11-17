import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRout.js";
import userRouter from "./routes/userRout.js";
import cartRouter from "./routes/cartRout.js";
import orderRouter from "./routes/orderRout.js";

// App Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Db Connection
connectDb();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port} `);
});
