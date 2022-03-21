import React from 'react';
import './App.css';
import {Footer} from "Layouts/Footer"
import {Logo} from "Layouts/Logo"
import {Home} from "Pages/Home"
function App() {
  return (
    <div className="App">
      <Logo/>
      <main className="app-content">
        <Home />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
