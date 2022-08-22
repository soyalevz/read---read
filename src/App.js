import "./App.css";
import { Navbar } from "./components/navbar";
import { Phrase } from "./components/phrase";
// import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Phrase />
    </div>
  );
}

export default App;
