import './App.css';
import NavBar from './components/NavBar';
import Overflow from './components/Overflow';
import Users from './components/Users'
import Login from'./components/desktop/Login';
import { MyFunction } from './Size';
import DropDown from './components/DropDown';

function App() {
  return (
    <div className="app w-full h-full">
  
<MyFunction/>
    <div className='visible sm:invisible'>
    <NavBar/>
    </div>
    <div className=' visible sm:invisible'>
    <Users/>
    </div>

    <div className="main sm:w-full sm:h-full invisible sm:visible">
    <Login/>
    </div>
  
    </div>
  );
}

export default App;
