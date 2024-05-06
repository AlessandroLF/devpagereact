import './App.css';
import ppic from './prechochi.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Alessandro Lombardo
      </header>
      <div id='background'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <img id='perfil' alt='err' src={ppic} />
      <div className='showPanel'>
        <div className='btbar'>
          <div>Git</div>
          <div>Git</div>
          <div>Git</div>
          <div>Git</div>
        </div>
      </div>
    </div>
  );
}

export default App;