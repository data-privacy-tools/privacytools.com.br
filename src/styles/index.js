import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'
import 'antd/es/row/style/css'
import 'antd/es/col/style/css'
import 'antd/es/divider/style/css'
import 'antd/es/form/style/css'
import 'antd/es/input/style/css'
import './select/'

import bg from '../assets/grid-white.png'
import darkBg from '../assets/background-dark-grid-fade.png'

const theme = {
	primaryColor: 'black',
	secondaryColor: '#180E5B',
	thirdColor: '#f4f7f9',
	fourthColor: '#343d46',
	fifthColor: '#4630EB',
	sixthColor: '#F3F3F3',
	seventhColor: '#274156',
	whiteColor: 'white',
	baseFontSize: '17px',
	backGround: bg,
	darkBackGround: darkBg,
	fontFamilyBase: "'Fira Sans', sans-serif",
}

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html {
    --c: ${theme.secondaryColor};
    --antd-wave-shadow-color: ${rgba(theme.fifthColor, 0.5)};
  }

  html,
  body {
    margin: 0
    padding: 0
  }

  body{
    position: relative;
    width: 100%;
    font-family: ${theme.fontFamilyBase};
    font-size: ${theme.baseFontSize};
    background-image: url(${theme.backGround});
    background-repeat: repeat-x;
    background-position: top;
    color: ${theme.fourthColor};
  }

  p{
    color: ${rgba(theme.primaryColor, 0.8)};
    font-weight: 400;
    overflow-wrap: break-word;
    font-size: ${theme.baseFontSize};
    font-weight: 300;
    line-height: 24px;
  }

  button{
    outline: none;
    border: 0;
    cursor: pointer
  }

  .injected-svg{
    width: 100%;
    height: auto;
  }

  a{
    color: ${theme.fourthColor};
  }

  ul{
    padding: 0;
  }

  li{
    padding: 0
  }

  ul, li{
    list-style: none
  }

  .ant-select-selection--single{
    margin-top: 0;
  }

  .ant-select-selection-selected-value{
    height: 36px;
    width: 100%;
  }
`

export { GlobalStyle, theme }
