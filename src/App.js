import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigate />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile props={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' element={<Dialogs store={props.store}/>}/>
        </Routes>
        </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
