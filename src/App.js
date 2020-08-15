import React from 'react';
import './App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import logo from './assets/logo.png'


function App() {
  return (
    <div className="cont container-fluid">
        <main className="main">
            <img className="logo" src={logo} alt="logo apozem" />
            <p className="subtitle">Coming soon...</p>
        </main>
        <footer className="footer">
         <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </footer>

           
    </div>
       
    

  );
}

export default App;
