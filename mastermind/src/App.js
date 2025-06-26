import logo from './logo.svg';
import './App.css';
/*
   1. Component-Based Programming
   I. Stateful Component
      JavaScript Class
      **JavaScript Function -> React Hook**
   II. Stateless Component
      JavaScript Function

    2. Life-cycle Management
    3. Declarative Programming: Tag
    4. Functional Programming: JS
    5. State Immutability
    6. Model/State --1-way Binding--> View (JS, Tag): ReactDOM ----> Browser's DOM
       **setState**                                  heuristic diff
                                                        keying
       Model/State <------x---------- View / Input Element
       js:          event -> Model
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
