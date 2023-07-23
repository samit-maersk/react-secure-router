import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React Router Example</h2>
      <nav>
        <Link className='menu__link' to={`/root`}>root</Link>
        <Link className='menu__link' to={`/non-secure-page`}>Non Secure Page</Link>
        <Link className='menu__link' to={`/secure-page`}>Secure Page</Link>
      </nav>
      <hr/>
      <Outlet />
    </div>
  );
}

export default App;
