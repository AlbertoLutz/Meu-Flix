import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logoBetoFlix.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';



function Menu() {
    return (
        <nav className="Menu">
          <Link to="/">
            <img className="Logo" src={Logo} alt="Logotipo Beto Flix" />
          </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/Video">
              Novo vídeo
          </Button>
        </nav>
    );
}

export default Menu;