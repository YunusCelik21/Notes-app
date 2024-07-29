import Navbar from './comp/Navbar'; 
import Home from './comp/Home';

const App = () => {
  return (
    <header>
      <div className="app">
        <Navbar/>
        <div className="content">
          <Home/>
        </div>
      </div>
    </header>
  );
}

export default App;