import { Link, NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React Router Example</h2>
      <nav>
        <NavLink className={({isActive, isPending}) => isActive ? 'menu__link active' : 'menu__link'} to={`/`}>root</NavLink>
        <NavLink className={({isActive, isPending}) => isActive ? 'menu__link active' : 'menu__link'} to={`/non-secure-page`}>Non Secure Page</NavLink>
        <NavLink className={({isActive, isPending}) => isActive ? 'menu__link active' : 'menu__link'} to={`/secure-page`}>Secure Page</NavLink>
        <NavLink className={({isActive, isPending}) => isActive ? 'menu__link active' : 'menu__link'} to={`/logout`}>Logout</NavLink>
      </nav>
      <hr/>
      <Outlet />
    </div>
  );
}

export default App;
