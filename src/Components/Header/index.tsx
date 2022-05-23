import { Container, ContainerMenus, Logo } from './styles';
import { Link } from 'react-scroll'

function Header() {
  return (
    <Container>
      <Logo>Vinicius Dalmazzo</Logo>
      <ContainerMenus >
        <span><Link activeClass="active" to="home" spy={true} smooth={true} delay={0}>Home</Link></span>
        <span><Link to="about-me" spy={true} smooth={true} delay={0}>Sobre mim</Link></span>
      </ContainerMenus>
    </Container>
  );
};

export default Header;
