import { Link } from "react-router-dom"; 

export default function Navbar() {
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/explore'>Explore</Link>
            </nav>
        </div>
    );
}