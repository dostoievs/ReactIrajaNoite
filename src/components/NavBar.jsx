import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoJS from '../assets/javascript.svg'
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
      
        <Container>

          <Navbar.Brand href="#home">
            <img
              alt=""
              src={LogoJS}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Projeto React
          </Navbar.Brand>

          <Nav className="me-auto">

            <Nav><Link to="/" className={style.links}>Home</Link></Nav>
            <Nav><Link to="/sobre">Sobre</Link></Nav>
            <Nav><Link to="/tarefas">Tarefas</Link></Nav>
            <Nav><Link to="/contato">Contato</Link></Nav>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;