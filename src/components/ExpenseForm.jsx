import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      addExpense({ description, amount });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg bg-gray-100">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="p-2 mb-2 border rounded w-full"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="p-2 mb-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
