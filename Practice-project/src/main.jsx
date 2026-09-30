import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render();

function Navbar() {
  return (
    <div className='nav'>
      <h3>KFC</h3>
      <ul className='list'>
        <li>Home</li>
        <li>Menu</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </div>
  
  );
}

function Body() {
  return (
    <div className='hero'>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
  <Navbar />
  <Body />
  </>
);
