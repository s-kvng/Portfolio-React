import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import logo from './assets/logo.svg';
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header logo={logo} />

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Profile userName="s-kvng" />} />
    </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
