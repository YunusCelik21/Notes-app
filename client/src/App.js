import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comp/Navbar'; 
import Home from './comp/Home';
import About from './comp/About';
import Login from './comp/Login';

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
            </Routes>
          </div>
        </div>
      </header>
    </Router>

  );
}

export default App;