import './App.css';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Profile from './components/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navigate/>
      <Profile/>
    </div>
  );
}

export default App;
