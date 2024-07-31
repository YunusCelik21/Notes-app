import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar'; 
import Home from './comp/Home';
import About from './comp/About';
import Login from './comp/Login';
import NoteDetails from './comp/NoteDetails';

const App = () => {
  return (
    <Router>
      <header>
        <div className="app">
          <Navbar/>
          <div className="content">            
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              {/** :id means its a variable*/}
              <Route exact path='/notes/:id' element={<NoteDetails/>}></Route>
            </Routes>
          </div>
        </div>
      </header>
    </Router>

  );
}

export default App;