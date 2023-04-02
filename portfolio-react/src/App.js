import logo from './assets/logo.svg';
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header logo={logo} />

      <Profile userName="s-kvng" />
    </div>
  );
}

export default App;
