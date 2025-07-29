import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';

export default function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

 // Load dữ liệu khi mở trang
useEffect(() => {
  const saved = localStorage.getItem('expenses');
  if (saved && saved !== '[]') {
    setExpenses(JSON.parse(saved));
  }
}, []);

// Lưu vào localStorage khi có thay đổi
useEffect(() => {
  if (expenses.length > 0) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }
}, [expenses]);


  const handleAddOrEdit = () => {
    if (!title || !amount) return;
    const newExpense = { id: editId || Date.now(), title, amount: Number(amount), date };
    setExpenses((prev) => {
      if (editId) {
        return prev.map((e) => (e.id === editId ? newExpense : e));
      }
      return [newExpense, ...prev];
    });
    setTitle('');
    setAmount('');
    setDate(new Date().toISOString().split('T')[0]);
    setEditId(null);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setAmount(item.amount);
    setDate(item.date);
    setEditId(item.id);
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="container">
      <h1>EXPENSE MANAGEMENT</h1>
      <div className="main-content">
        <ExpenseForm
          title={title}
          amount={amount}
          date={date}
          setTitle={setTitle}
          setAmount={setAmount}
          setDate={setDate}
          onSubmit={handleAddOrEdit}
        />

        <div className="add-button" onClick={handleAddOrEdit}>ADD ➤</div>

        <ExpenseList
          expenses={expenses}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      <TotalExpense total={total} />
    </div>
  );
}
