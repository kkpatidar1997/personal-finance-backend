import express from "express";
import Transaction from "../models/Transaction.js";
// import { router } from "express";

 const router = express.Router();

// ✅ Get All Transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Add a New Transaction
router.post("/", async (req, res) => {
  try {
    const { amount, description, date, category } = req.body;
    const transaction = new Transaction({ amount, description, date, category });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error adding transaction" });
  }
});

// ✅ Delete a Transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction" });
  }
});
// ✅ Update a Transaction
router.put("/:id", async (req, res) => {
  try {
    const { amount, description, date, category } = req.body;
    
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { amount, description, date, category },
      { new: true, runValidators: true }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction" });
  }
});

export default router;
