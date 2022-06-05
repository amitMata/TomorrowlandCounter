import Particle from './components/Particles';
import './App.css';
import Countdownlist from './components/Countdownlist';

function App() {
  return (
    <div>
      <div className="par">
        
      </div>
      <div className="def">
        <img src="https://i.pinimg.com/originals/bb/b4/0e/bbb40e2ccdbeb95096c09f8e8a27d20f.png"/>
        <div className="container">
        
          <Countdownlist/>
        </div>
      </div>
      <div className="par">
        <Particle/>
      </div>
    </div>
  );
}

export default App;
