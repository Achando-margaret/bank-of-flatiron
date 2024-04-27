import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount,
      date
    };
    onSubmit(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontWeight: 'bold' }}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontWeight: 'bold' }}>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontWeight: 'bold' }}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={submitButtonStyle}>Add Transaction</button><br></br>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
  fontSize: '1rem'
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem'
};

export default TransactionForm;
