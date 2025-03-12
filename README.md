# 📊 Personal Finance Visualizer - Backend

This is the backend for the **Personal Finance Visualizer**, a web app to track expenses and visualize spending.

## 🚀 Features
- **Add, Edit, Delete** Transactions  
- **Categorize Expenses**  
- **Monthly Expense Reports**  
- **Budget vs. Actual Comparison**  

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Deployment**: Render  

---

## 🔧 Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone <your-backend-repo-url>
cd backend
2️⃣ Install dependencies
npm install

3️⃣ Add environment variables
Create a .env file and add:

env
Copy
Edit
MONGO_URI=your-mongodb-connection-string
PORT=5000


4️⃣ Start the server
sh
Copy
Edit
npm run dev
Server will run on http://localhost:5000.

📡 API Endpoints
Method	Endpoint	Description
GET	/api/transactions	Get all transactions
POST	/api/transactions	Add a transaction
PUT	/api/transactions/:id	Update transaction
DELETE	/api/transactions/:id	Delete transaction
