import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import { useCart } from './context/CartContext';
import './App.css';

const App: React.FC = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart ({cartItemCount})</Link>
        </nav>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<OrderForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
