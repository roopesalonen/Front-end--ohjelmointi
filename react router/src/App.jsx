import { Link, Outlet } from 'react-router-dom';
import './App.css'

export default function App() {
  return (
    <>
      <div id="topbar">
        <h1>Welcome to React Router</h1>
      </div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}
