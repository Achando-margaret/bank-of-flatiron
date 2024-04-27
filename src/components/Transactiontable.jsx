import React from 'react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table" style={{ maxWidth: '600px', margin: '0 auto' }}> <br></br><br></br>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{transaction.description}</td>
              <td style={tableCellStyle}>{transaction.amount}</td>
              <td style={tableCellStyle}>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '10px',

};

const evenRowStyle = {
  backgroundColor: '#f2f2f2',

};

const oddRowStyle = {
  backgroundColor: '#ffffff',

};


export default TransactionTable;
