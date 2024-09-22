import React, { useState } from 'react';
import './Result.css'; // Import the CSS file for styling

const Results = ({ data }) => {
  const [visibleSections, setVisibleSections] = useState(['alphabets', 'numbers', 'highestAlphabet']);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setVisibleSections(prev =>
      checked ? [...prev, value] : prev.filter(section => section !== value)
    );
  };

  return (
    <div className="results-container">
      <h2>Filtered Response</h2>
      <div className="filter-options">
        <label>
          <input
            type="checkbox"
            value="alphabets"
            checked={visibleSections.includes('alphabets')}
            onChange={handleChange}
          />
          Alphabets
        </label>
        <label>
          <input
            type="checkbox"
            value="numbers"
            checked={visibleSections.includes('numbers')}
            onChange={handleChange}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            value="highestAlphabet"
            checked={visibleSections.includes('highestAlphabet')}
            onChange={handleChange}
          />
          Highest LowerCase Alphabet
        </label>
      </div>
      {visibleSections.includes('alphabets') && (
        <div>
          <h3>Alphabets</h3>
          <p>{data.alphabets.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('numbers') && (
        <div>
          <h3>Numbers</h3>
          <p>{data.numbers.join(', ')}</p>
        </div>
      )}
      {visibleSections.includes('highestAlphabet') && (
        <div>
          <h3>Highest Alphabet</h3>
          <p>{data.highest_lowercase_alphabet.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Results;