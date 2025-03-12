// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import transactionRoutes from "./routes/transactionRoutes.js";
// import budgetRoutes
// // const budgetRoutes = require("./routes/budgetRoutes");



// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// app.use("/api/budgets", budgetRoutes);

// app.use("/api/transactions", transactionRoutes);
// // Test Route
// app.get("/", (req, res) => {
//   res.send("Personal Finance API is running...");
// });

// // Connect to MongoDB
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   })
//   .catch((err) => {
//     console.error("❌ MongoDB Connection Failed:", err);
//   });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import transactionRoutes from "./routes/transactionRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js"; // ✅ Fixed import

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/budgets", budgetRoutes);
app.use("/api/transactions", transactionRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Personal Finance API is running...");
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // ✅ Added options
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });

export default app; // ✅ Exporting app (optional, useful for testing)
