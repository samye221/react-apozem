import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Info from "./Info";


const App = () => {
  // const [formValue, setFormValue] = useState('');
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  return (
    <div className="cont container-fluid">
        <main className="main">
          <div className="title">
            <img className="logo" src={logo} alt="logo apozem" />
            <p className="subtitle">Coming soon...</p>
          </div>
        </main>
        <footer className="footer">
         <Info />
        </footer>

        
    </div>
       
    

  );
}

export default App;
