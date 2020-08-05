import React, { useEffect, useRef ,useState} from 'react';
import pullToRefresh from './pullDown';
import styled, { css } from 'styled-components'


import './App.css';
const { init } = pullToRefresh()
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`
//css in js
function App() {
  const [isPrimary,setIsPrmary] = useState(false);
  const contentRef = useRef();
  const ptrRef =useRef();
  const bodyRef = useRef()
  useEffect(() => {
    init({
      contentEl: contentRef.current,
      ptrEl:ptrRef.current,
      bodyEl:bodyRef.current,
     
    });
  }, [])
  return (
    <div   ref={bodyRef} className="body-wrap">
      {/* ptr-wrap 负责移动 
       transform:'*/}
      <div ref={ptrRef} className="ptr-wrap">
        {/* 负责动画 */}
        <div className="loading"></div>
      </div>
      <header ref={contentRef} className="content-wrap">
        <button primary={isPrimary} onClick={()=>{
          setIsPrmary(!isPrimary)
        }}></button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
