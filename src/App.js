import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductDetail from './components/ProductDetail';
import deleteproduct from './components/deleteproduct';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
        <Routes>
        
        <Route path="/" caseSensitive={false} element={<ShowProducts/>} />
        <Route path="/product" caseSensitive={false} element={<AddProduct/>} />
        <Route path="/:id/" caseSensitive={false} element={<ProductDetail/>} />
        <Route path="/:id/update" caseSensitive={false} element={<UpdateProduct/>} />
        <Route path="/:id/delete" caseSensitive={false} element={<deleteproduct/>} />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
