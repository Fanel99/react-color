import './App.css';
import { useState } from 'react';

// App Comonent

function App() {
  const [hex, setHex] = useState('#32a848');

  // Create random  Hex
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: hex,
        minHeight: '33vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <h1>{hex}</h1>
      <button onClick={randomHex}>Random Color</button>
    </div>
  );
}

export default App;
