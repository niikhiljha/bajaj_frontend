import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'RA2111026030139';
  }, []);

  const handleSubmit = async (jsonInput) => {
    try {
      const response = await fetch('https://bajaj-backend-4xa1.onrender.com/bfhl/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonInput),
      });

      const data = await response.json();
      console.log(data);
      setResults(data);
      setError('');
    } catch (err) {
      console.log(err)
      setError('Error processing the request');
    }
  };

  return (
    <div className="app-container">
      <h1>RA2111026030139</h1>
      <InputForm onSubmit={handleSubmit} />
      {error && <p className="error-text">{error}</p>}
      {results && <Result data={results} />}
    </div>
  );
};

export default App;

