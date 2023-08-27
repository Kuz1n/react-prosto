import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigate />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
        </Routes>
        </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
