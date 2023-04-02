import {Link} from "react-router-dom";
import { BsSearch, BsCart2 } from "react-icons/bs";
import './styles.css';
import logo from '../../img/logo-digital-college.png'


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Digital College" className="logo" />
                <span>Digital Store</span>
            </Link>

            <div className="input-container">
                <input type="text" placeholder="Pesquisar produto..." />
                <BsSearch />
            </div>

            <span className="link-cadastro">Cadastre-se</span>

            <button>Entrar</button>
            
            <div className="cart">
                <BsCart2 className="cart-icon" />
                <span className="badge">2</span>
            </div>
        </nav>
    )
}