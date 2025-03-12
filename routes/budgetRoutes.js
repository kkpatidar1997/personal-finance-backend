// // const express = require("express");

// // const Budget = require("../models/Budget");
// import Budget from "../models/Budget";
// import Transaction from "../models/Transaction";

// import express from "express";

// // const Transaction = require("../models/Transaction");

// // Create or Update Budget for a Category
// const router = express.Router();
// router.post("/", async (req, res) => {
//   const { category, amount } = req.body;
//   try {
//     let budget = await Budget.findOne({ category });

//     if (budget) {
//       budget.amount = amount;
//     } else {
//       budget = new Budget({ category, amount });
//     }

//     await budget.save();
//     res.status(200).json(budget);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Get All Budgets
// router.get("/", async (req, res) => {
//   try {
//     const budgets = await Budget.find();
//     res.status(200).json(budgets);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });


// // Get Budget vs. Actual Spending
// router.get("/comparison", async (req, res) => {
//   try {
//     const budgets = await Budget.find();
//     const transactions = await Transaction.find();

//     const comparison = budgets.map((budget) => {
//       const totalSpent = transactions
//         .filter((txn) => txn.category === budget.category)
//         .reduce((acc, txn) => acc + txn.amount, 0);

//       return {
//         category: budget.category,
//         budget: budget.amount,
//         spent: totalSpent,
//       };
//     });

//     res.status(200).json(comparison);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });


// module.exports = router;
import express from "express";
import Budget from "../models/Budget.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

// Create or Update Budget for a Category
router.post("/", async (req, res) => {
  const { category, amount } = req.body;
  try {
    let budget = await Budget.findOne({ category });

    if (budget) {
      budget.amount = amount;
    } else {
      budget = new Budget({ category, amount });
    }

    await budget.save();
    res.status(200).json(budget);
  } catch (error) {
    console.error("Error updating budget:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get All Budgets
router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.status(200).json(budgets);
  } catch (error) {
    console.error("Error fetching budgets:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get Budget vs. Actual Spending
router.get("/comparison", async (req, res) => {
  try {
    const budgets = await Budget.find();
    const transactions = await Transaction.find();

    const comparison = budgets.map((budget) => {
      const totalSpent = transactions
        .filter((txn) => txn.category === budget.category)
        .reduce((acc, txn) => acc + txn.amount, 0);

      return {
        category: budget.category,
        budget: budget.amount,
        spent: totalSpent,
      };
    });

    res.status(200).json(comparison);
  } catch (error) {
    console.error("Error fetching budget comparison:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
