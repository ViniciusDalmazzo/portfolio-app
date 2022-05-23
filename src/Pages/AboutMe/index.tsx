import { Container, ContainerProfileImage, ContentInfos, ProfileImage } from './styles';
import UserImage from '../../assets/Images/profile.png';

function AboutMe() {
  return (
    <Container >
      <ContainerProfileImage>
        <ProfileImage image={UserImage} />
      </ContainerProfileImage>
      <ContentInfos id="about-me">
        <h2>Sobre mim</h2>
        <span>Sorocaba, Brasil</span>
        <p>
          Desenvolvedor Full Stack com mais de 5 anos de experiência sendo suas principais stacks C#, Angular e React Native. <br />
          Sólidos conhecimentos em GIT, SQL Server, Metodologias ágeis, CI/CD, DDD, APIs, Java Script, Type Script e Microserviços. <br />
          Sempre em busca de novos desafios e aprendizados.          
        </p>
      </ContentInfos>
    </Container>
  );
};

export default AboutMe;
