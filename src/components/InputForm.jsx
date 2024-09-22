import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (Array.isArray(parsedInput.data)) {
        setError("");
        onSubmit(parsedInput);
      } else {
        setError('Invalid JSON format: "data" should be an array.');
      }
    } catch (err) {
      setError("Invalid JSON format");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend htmlFor="input">API Input</legend>
        <textarea
        id="input"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter JSON here..."
          rows={4}
          cols={50}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
