/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import color from 'randomcolor';

// CSS-in-JS
const button = css`
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 16px;
  width: 147px;
  margin-top: 10px;
`;

export default function Button(props) {
  return (
    <button
      css={button}
      onClick={() =>
        props.setRandomColor(
          color.randomColor({ luminosity: props.luminosity, hue: props.hue }),
        )
      }
    >
      Random Color
    </button>
  );
}
