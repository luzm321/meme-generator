//import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
            <Header />
        </div>
      </header>
    </div>
  );
};

export default App;
