import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
      box-sizing:border-box;
      margin: 0;
      padding: 0;
      font-size: 14px;
      -ms-overflow-style: none;

      ::-webkit-scrollbar {
        display: none;
      }
    }

  input {
    border: none;
    outline: none;
    background-color: transparent;
  }
  button{
    border:none;
    background: none;
    cursor: pointer;
  }

  select{ 
    border:none;
    outline: none;
  }

  textarea {
    border: none;
    outline:none;
    resize: none;
  }
`

export default GlobalStyle
