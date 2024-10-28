import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import kpopGroups from './data/kpop.mjs';
import Content from './components/Content';

import Header from './components/Header';
import Footer from './components/Footer';

import coffeePot from './assets/caffeine.svg';
import flower from './images/flower.svg';
import playButton from '/play_button.svg';

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
      <Header />
      <a href="https://www.youtube.com/watch?v=8Ebqe2Dbzls">
        <button className="logo" alt="click to play">Play▶️<img src="{playButton}" alt="" /></button>
        
      </a>
      <h1> Take a breather...</h1>
      <div>
         <a href="https://iconify.design/getting-started/" target="_blank">
           <img src={coffeePot} className="logo" alt="coffee icon" />
         </a>
         <a href="https://www.freepik.com/free-vector/blue-white-striped-dahlia-flower_342443975.htm#fromView=search&page=1&position=18&uuid=282ba311-e614-44fc-9100-37bb5c37b934" target="_blank">
           <img src={flower} className="logo react" alt="flower" />
         </a>
      </div>
      
      <Content color="hsla(360, 100%, 100%, 1.0)" text="🍻APT🍻APT🍻APT" />
      <Content color="#e63946" text="HOLD ON!! THAT AIN'T THE WEEKND ..." />
      <Content color="#f4a261" text="BRUNO !!??" />
      <Footer />
    </>
  );
}

export default App
