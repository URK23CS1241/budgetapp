import React, { useState } from 'react';
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [food, setFood] = useState('');
  const [transport, setTransport] = useState('');
  const [others, setOthers] = useState('');
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const handleCalculate = () => {
    // Validation
    if (
      income === '' ||
      rent === '' ||
      food === '' ||
      transport === '' ||
      others === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    if (
      income <= 0 ||
      rent < 0 ||
      food < 0 ||
      transport < 0 ||
      others < 0
    ) {
      alert('All inputs must be positive numbers.');
      return;
    }

    // Calculate remaining balance
    const totalExpenses =
      parseFloat(rent) + parseFloat(food) + parseFloat(transport) + parseFloat(others);
    const remainingBalance = parseFloat(income) - totalExpenses;
    setBalance(remainingBalance.toFixed(2));
    
    if (remainingBalance > 0) {
      setMessage('You have savings this month!');
      setColor('green');
    } else if (remainingBalance === 0) {
      setMessage('Your budget is balanced.');
      setColor('black');
    } else {
      setMessage('Warning: You are overspending!');
      setColor('red');
    }
  };

  return (
    <div className="app-container">
      <h2>💰 Budget Calculator</h2>

      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Rent/EMI"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Food Expenses"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Transport Expenses"
        value={transport}
        onChange={(e) => setTransport(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Other Expenses"
        value={others}
        onChange={(e) => setOthers(e.target.value)}
      /><br />

      <button onClick={handleCalculate}>Calculate Balance</button>

      {balance !== null && (
        <div className="result">
          <h3 className="balance">Remaining Balance: ₹{balance}</h3>
          <p className="status-message" style={{ color: color }}>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
