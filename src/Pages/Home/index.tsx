import { BackgroundImage, Container, ContainerButtons, ContentInfos } from './styles';
import HomeBackgroundImg from '../../assets/Images/home-bg.png';
import {ReactComponent as LinkedInIcon} from '../../assets/Icons/linkedin-icon.svg';
import {ReactComponent as DownloadIcon } from '../../assets/Icons/download-icon.svg';

function Home() {
  return (
    <Container>
      <ContentInfos>
        <h3>olá, eu sou</h3>
        <h1>vinicius dalmazzo</h1>
        <h3>desenvolvedor full stack.</h3>
        <ContainerButtons>
          <button><LinkedInIcon />LinkedIn</button>
          <button><DownloadIcon />Currículo</button>
        </ContainerButtons>
      </ContentInfos>
      <BackgroundImage image={HomeBackgroundImg} />
    </Container>
  );
};

export default Home;
