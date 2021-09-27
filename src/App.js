/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';

// App Component

function App() {
  const [hue, setHue] = useState('');
  const [hex, setHex] = useState('#32a848');
  const [luminosity, setLuminosity] = useState('');

  //  Handlers
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
        minHeight: '33.3vh',
        overflow: 'hidden',
        zoom: 3,
        transition: 'all  2s ease',
      }}
    >
      <h1>{hex}</h1>

      <Input
        placeholder="Choose Luminosity "
        value={luminosity}
        onChange={onChangeLuminosity}
      />
      <Input placeholder="Choose Hue" value={hue} onChange={onChangeHue} />

      <Button setRandomColor={setHex} luminosity={luminosity} hue={hue} />
    </div>
  );
}

export default App;
