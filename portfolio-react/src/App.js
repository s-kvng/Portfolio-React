import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import logo from './assets/logo.svg';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';
import Project from './pages/ProjectDetail';
import './App.css';


function App() {
  return (
    <div className="App">
      
      

    <BrowserRouter>
    <Header logo={logo} />
    <Routes>
      <Route path='/' element={<Profile userName="s-kvng" />} />
      <Route path='/projects' element={<Projects userName='s-kvng' />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/projects/:name' element={<Project userName='s-kvng'/>}/>
    </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
