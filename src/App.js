import './index.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// App Comonent

function App() {
  const [hex, setHex] = useState('#32a848');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  // Create random  Hex
  /* const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
  }; */

  // onChange Handlers
  function onChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function onChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  const container = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  return (
    <div
      css={container}
      className="App"
      style={{
        backgroundColor: hex,
        minHeight: '33vh',
        overflow: 'hidden',
        zoom: 3,
      }}
    >
      <h1>{hex}</h1>

      <Input
        text="luminosity"
        type="text"
        placeholder="Choose Luminosity "
        value={luminosity}
        onChange={onChangeLuminosity}
      />
      <Input
        text="hue"
        type="text"
        placeholder="Choose Hue"
        value={hue}
        onChange={onChangeHue}
      />

      <Button setRandomColor={setHex} luminosity={luminosity} hue={hue} />
    </div>
  );
}

export default App;
