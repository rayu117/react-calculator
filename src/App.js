import Numbers from './components/Numbers'
import './App.css';
import "./Numbers.css"
import Operators from './components/Operators';

function App() {
  return (
    <>
      <div className = "numbers">
        <Numbers />
      </div>
      <div className = "operators">
        <Operators />
      </div>
    
    </>
  );
}

export default App;
