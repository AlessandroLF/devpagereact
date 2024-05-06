import { useState } from 'react';
import './App.css';
import ppic from './prechochi.jpg';
import {Experience, Git, Animations, Info} from './components/basePanels'

function App() {

  const [pannel, setPannel] = useState(<></>);
  const [active, setActive] = useState({
    xp: false,
    gt: false,
    an: false,
    io: false
  });

  const onClick = (event)=>{
    const name = event.target.id;
    setActive((prev)=>({
      ...false,
      [name]: !prev[name]
    }));
    if(!active[name])
      switch(name){
        case 'xp': setPannel(<Experience />);
          break;
        case 'gt': setPannel(<Git />);
          break;
        case 'an': setPannel(<Animations />);
          break;
        case 'io': setPannel(<Info />);
          break;
      }
      else
        setPannel(<></>);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Alessandro Lombardo
      </header>
      <div id='background'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className='showPanel'>
        <img id='perfil' alt='err' src={ppic} />
        <div className='btbar'>
          <div className={active.xp ? 'btn on' : 'btn'} id='xp' onClick={onClick} >XP</div>
          <div className={active.gt ? 'btn on' : 'btn'} id='gt' onClick={onClick} >GT</div>
          <div className={active.io ? 'btn on' : 'btn'} id='io' onClick={onClick} >IO</div>
          <div className={active.an ? 'btn on' : 'btn'} id='an' onClick={onClick} >AN</div>
        </div>
        {pannel}
      </div>
    </div>
  );
}

export default App;