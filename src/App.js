import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
        <Routes>
        <Route path="/product" caseSensitive={false} element={<AddProduct/>} />
        <Route path="/" caseSensitive={false} element={<ShowProducts/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
