import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import kpopGroups from './data/kpop.mjs';
import Content from './components/Content';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  // function Header() {
  //   return (<h1>Simple React Application</h1>);
  // }
  
  // function Content() {
  //   return (<p>This is my first React Application, wish me luck!</p>);
  // }
  
  // function Footer() {
  //   return (<h1>Created by Me, of course.</h1>);
  // }

  // function Header() {
  //   return (<h1>Simple React Application</h1>);
  // }
  
  // function Content(props) {
  //   return (<p style={{color: props.color}}>{props.text}</p>);
  // }
  
  // function Footer() {
  //   return (<h1>Created by Me, of course.</h1>);
  // }

  return (
    // from Vite React dependencies download
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <>
      <h1>KPOP Groups</h1>
      <div>
         <a href="https://vite.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
         </a>
         <a href="https://react.dev" target="_blank">
           <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
      </div>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App
