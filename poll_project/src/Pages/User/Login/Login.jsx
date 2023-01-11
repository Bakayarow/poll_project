import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />

      <form>
            <label>
                Code pin session:
                <input type="text" name="lastname" />
            </label>
            <input type="submit" value="Submit" />
            <label>
                Nom:
                <input type="text" name="lastname" />
            </label>
            <input type="submit" value="Submit" />
            <label>
                Prénom:
                <input type="text" name="firstname" />
            </label>
            <label>
                Rôle:
                <input type="text" name="job" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
    
  );
}

export default App;
