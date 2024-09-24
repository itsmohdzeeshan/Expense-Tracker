import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => (
  <ul>
    {expenses.map((expense, index) => (
      <li key={index} className="flex justify-between p-2 border-b">
        <span>{expense.description}</span>
        <span>${expense.amount}</span>
        <button onClick={() => deleteExpense(index)} className="text-red-500">Delete</button>
      </li>
    ))}
  </ul>
);

export default ExpenseList;
