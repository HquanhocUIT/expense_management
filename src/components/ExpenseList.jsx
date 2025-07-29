
import React from 'react';

export default function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="list-section">
      <h2>Expense List</h2>
      {expenses.map((item) => (
        <div key={item.id} className="expense-item">
          <p>Date: {item.date}</p>
          <p>Title: {item.title}</p>
          <p>Amount: {item.amount} VND</p>
          <button className="edit-btn" onClick={() => onEdit(item)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
