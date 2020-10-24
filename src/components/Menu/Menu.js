import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'
import "./Menu.scss"

export default function Menu(props) {

  // Por medio de las props estamos recibiendo el color para que pueda ser dinamico
  // y poder cambiar de calor en cada pagina
  const {menuColor} = props

  // Se hace uso de estilos en linea para ocuapar el color que llego por props
  // NOTA: Los estilos en linea son una mala practica pero al parecer en REACT es habitual 
  return (
    <header 
      className="menu"
      style={{backgroundColor: menuColor || "transparent"}}
    >
      <Container>
        <nav className="menu__navbar">
          <ul className="menu__navbar-menu">
            <li className="menu__navbar-item">
              <Link to="/" className="menu__navbar-link">Inicio</Link>
            </li>
            <li className="menu__navbar-item">
              <Link to="/skills" className="menu__navbar-link">Skills</Link>
            </li>
            <li className="menu__navbar-item">
              <Link to="/projects" className="menu__navbar-link">Proyectos</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
