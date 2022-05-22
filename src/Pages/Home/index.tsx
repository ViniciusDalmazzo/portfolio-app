import { BackgroundImage, Container, ContainerButtons, ContentInfos } from './styles';
import HomeBackgroundImg from '../../assets/Images/home-bg.png';
import {ReactComponent as LinkedInIcon} from '../../assets/Icons/linkedin-icon.svg';
import {ReactComponent as GitHubIcon } from '../../assets/Icons/github-icon.svg';

function Home() {
  return (
    <Container>
      <ContentInfos>
        <h3>olá, eu sou</h3>
        <h1>vinicius dalmazzo</h1>
        <h3>desenvolvedor full stack.</h3>
        <ContainerButtons>
          <button><LinkedInIcon /><span>LinkedIn</span></button>
          <button><GitHubIcon /><span>GitHub</span></button>
        </ContainerButtons>
      </ContentInfos>
      <BackgroundImage image={HomeBackgroundImg} />
    </Container>
  );
};

export default Home;
