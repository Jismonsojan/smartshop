import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './componets/Homepage/Homepage';
import Products from './componets/Products/Products';
import Cart from './componets/Cart/Cart';
import Navbar from './componets/Navbar/Navbar';
import Signin from './componets/Signin/Signin';
import Login from './componets/Login/Login';
import Singleproduct from './componets/Singleproduct/Singleproduct';



export default() => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/product" element={<Products />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/login" element={<Login />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path="/view/:id" element={<Singleproduct/>} />
        </Routes>
      </Router>
      
      
      
      
    </div> 
  );
};

