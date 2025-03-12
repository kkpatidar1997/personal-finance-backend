// const mongoose = require("mongoose");

// const BudgetSchema = new mongoose.Schema({
//   category: { type: String, required: true, unique: true },
//   amount: { type: Number, required: true },
// });

// module.exports = mongoose.model("Budget", BudgetSchema);
import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
});

const Budget = mongoose.model("Budget", BudgetSchema);

export default Budget;

