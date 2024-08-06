import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar'; 
import Home from './comp/Home';
import About from './comp/About';
import NoteDetails from './comp/NoteDetails';
import NoteAdd from './comp/NoteAdd';
import NotFound from './comp/NotFound';
import NoteEdit from './comp/NoteEdit';

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
              {/** :id means its a variable*/}
              <Route exact path='/notes/:id' element={<NoteDetails/>}></Route>
              <Route exact path='/notes/:id/edit' element={<NoteEdit/>}></Route>
              <Route exact path='/add' element={<NoteAdd/>}></Route>
              <Route exact path='*' element={<NotFound/>}></Route>
            </Routes>
          </div>
        </div>
      </header>
    </Router>

  );
}

export default App;