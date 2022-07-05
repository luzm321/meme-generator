//import logo from './logo.svg';
import Header from "./components/Header";
import Meme from "./components/Meme";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
            <Header />
            <Meme />
        </div>
      </header>
    </div>
  );
};

export default App;
