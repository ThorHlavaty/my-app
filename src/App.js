import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter";

const names = ["Nelson", "Atom", "Cici"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="greeting"> Hello! </p>
        {names.map((name, index) => {
          return <Greeter key={index} name={name} />;
        })}
        <Greeter name="Ted" />{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
