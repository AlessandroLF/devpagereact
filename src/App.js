import { useState } from 'react';
import './App.css';
import ppic from './ProfPic.png';
import {Experience, Bd, Animations, Info} from './components/basePanels'
import plogo from './prgramIcon.png';
import ilogo from './iLogo.png'

function App() {

  const [pannel, setPannel] = useState(<></>);
  const [active, setActive] = useState({
    xp: false,
    bd: false,
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
        case 'bd': setPannel(<Bd />);
          break;
        case 'an': setPannel(<Animations />);
          break;
        case 'io': setPannel(<Info />);
          break;
        default: console.log("Error al elegir panel: " + name);
      }
      else
        setPannel(<></>);
  }

  const onImgClick = (event)=>{
    event.stopPropagation();
    event.target.parentElement.click();
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
          <div className={active.xp ? 'btn on' : 'btn'} id='xp' onClick={onClick} ><img src={plogo} alt='Programing Languages' onClick={onImgClick}/></div>
          <div className={active.bd ? 'btn on' : 'btn'} id='bd' onClick={onClick} ><img src='https://cdn-icons-png.flaticon.com/512/15156/15156593.png' alt='Git' onClick={onImgClick}/></div>
          {/*<div className={active.an ? 'btn on' : 'btn'} id='an' onClick={onClick} ><img src='https://media.tenor.com/EJQvxUMk__MAAAAi/runner.gif' alt='Animations' onClick={onImgClick}/></div>*/}
          <div className={active.an ? 'btn on' : 'btn'} id='an' onClick={onClick} ><img src='https://cdn-icons-png.flaticon.com/512/7187/7187174.png' alt='Animations' onClick={onImgClick}/></div>
          <div className={active.io ? 'btn on' : 'btn'} id='io' onClick={onClick} ><img src={ilogo} alt='Info' onClick={onImgClick}/></div>
        </div>
        {pannel}
      </div>
    </div>
  );
}

export default App;