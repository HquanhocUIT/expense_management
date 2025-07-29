// src/components/TotalExpense.jsx
import React from 'react';

export default function TotalExpense({ total }) {
  return (
    <div className="total-section">Total Expense: {total} VND</div>
  );
}
