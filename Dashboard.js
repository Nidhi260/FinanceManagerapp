
import React from "react";

const Dashboard = () => {
  // Sample financial data (you can replace this with real API data)
  const user = {
    name: "John Doe",
    balance: 2500,
    income: 5000,
    expenses: 2500,
    transactions: [
      { id: 1, description: "Salary", amount: 3000, type: "income" },
      { id: 2, description: "Groceries", amount: -500, type: "expense" },
      { id: 3, description: "Rent", amount: -1500, type: "expense" },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Balance</div>
            <div className="card-body">
              <h5 className="card-title">${user.balance}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Total Income</div>
            <div className="card-body">
              <h5 className="card-title">${user.income}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Total Expenses</div>
            <div className="card-body">
              <h5 className="card-title">${user.expenses}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <h3 className="mt-4">Recent Transactions</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {user.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td className={transaction.type === "income" ? "text-success" : "text-danger"}>
                ${transaction.amount}
              </td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
