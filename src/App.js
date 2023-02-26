// import logo from './logo.svg';
import './App.css';
import Click from "./Components/Button.js";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return(
    <div className ="App">
      <header className="App-header">
        <h1>โหวตอาหาร</h1>
        <Click/>
      </header>
    </div>
    
  );
}

export default App;
