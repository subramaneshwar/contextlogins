import { useContext } from 'react';
import './App.css';
import Login from './Componets/Login';
import { Auth } from './Componets/Contex';
import Home from './Componets/Home';
import Nav from './Componets/Nav';

function App() {
  const {islogin} = useContext(Auth)
  return (
    <div className="App">
  
      {
        islogin ? (
          <>
          <Nav/>
        <Home/>
          </>
        ):
        (<Login/>)
      }

    </div>
  );
}

export default App;
