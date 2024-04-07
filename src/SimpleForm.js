import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState(''); // State to store the user's name
  const [message, setMessage] = useState(''); // State to store the greeting message

  // Function to handle input change
  const handleInputChange = (event) => {
    setName(event.target.value); // Update the 'name' state with the input value
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setMessage('Hello, ${kishore}!'); // Update the 'message' state with the greeting message
    setName(''); // Clear the input field after submission
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display the greeting message if it exists */}
    </div>
  );
}

export default SimpleForm;