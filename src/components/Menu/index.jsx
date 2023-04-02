import {Link, useLocation} from "react-router-dom";

import './styles.css';

export default function Menu() {
    return (
        <div className="menu">
            <Link to="/" className={definirClassName(useLocation().pathname, '/')}>Home</Link>
            <Link to="/produtos" className={definirClassName(useLocation().pathname, '/produtos')}>Produtos</Link>
            <Link to="/categorias" className={definirClassName(useLocation().pathname, '/categorias')}>Categorias</Link>
            <Link to="/meus-pedidos" className={definirClassName(useLocation().pathname, '/meus-pedidos')}>Meus Pedidos</Link>
        </div>
    )
}

function definirClassName(rotaAtual, rotaDoLink) {
    if(rotaAtual === rotaDoLink) {
        return 'selected-link';
    } else {
        return '';
    }
}