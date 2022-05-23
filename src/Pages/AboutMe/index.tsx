import { Container, ContainerProfileImage, ContentInfos, ProfileDescription, ProfileImage } from './styles';
import UserImage from '../../assets/Images/profile.png';

function AboutMe() {
  return (
    <Container>
      <ContainerProfileImage>
        <ProfileImage image={UserImage} />
      </ContainerProfileImage>
      <ContentInfos>
        <h2>Sobre mim</h2>
        <span>Sorocaba, Brasil</span>
        <ProfileDescription>
          Desenvolvedor Full Stack na empresa
          Neobpo utilizando a linguagem Angular e .NET Core. Estou em
          busca de uma vaga em desenvolvimento WEB seja ela na parte de
          back-end ou de front-end, estudo e participo de projetos
          opensources para adquirir conhecimento e melhorar cada vez mais
          minha capacidade técnica.</ProfileDescription>
      </ContentInfos>
    </Container>
  );
};

export default AboutMe;
