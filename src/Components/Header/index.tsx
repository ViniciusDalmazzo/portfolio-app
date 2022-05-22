import { Container, ContainerMenus, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo>Vinicius Dalmazzo</Logo>
      <ContainerMenus >
        <span>Home</span>
        <span>Sobre mim</span>
        <span>Experiência</span>
        <span>Projetos</span>
      </ContainerMenus>

    </Container>
  );
};

export default Header;
