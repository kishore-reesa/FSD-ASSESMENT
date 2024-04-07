import React from 'react';
import Greeting from './Greeting'; 

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name="Kishore Reesa" /> {/* Pass your name as the 'name' prop */}
    </div>
  );
}

export default App;