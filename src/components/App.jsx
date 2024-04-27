import React, { useState } from 'react';
import TransactionTable from './Transactiontable'
import TransactionForm from './Transactionform'

const App = () => {
  // State variables to store transactions and search term
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new transaction to the list
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Bank Transactions</h1>
      <TransactionForm onSubmit={addTransaction} />
      <input
  type="text"
  placeholder="Search transactions..."
  value={searchTerm}
  onChange={handleSearchTermChange}
  style={{
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '50%',
    marginBottom: '10px',
    boxSizing: 'border-box',
    fontSize: '16px',
    margin: '0 auto', // Center horizontally
    display: 'block' // Ensures the input takes the full width of its container
  }}
/>


      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
