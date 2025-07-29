
import React from 'react';

export default function ExpenseForm({ title, amount, date, setTitle, setAmount, setDate }) {
  return (
    <div className="form-section">
      <h2>Expense Info</h2>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Breakfast..."
      />
      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="10000..."
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}
