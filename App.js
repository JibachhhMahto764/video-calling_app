import { Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/home';
import RoomPage from './Pages/room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/room/:roomId' element={<RoomPage/>} />

        </Routes>

        </div>
  );
}

export default App;
