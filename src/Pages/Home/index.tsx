import { BackgroundImage, Container, ContainerButtons, ContentInfos } from './styles';
import HomeBackgroundImg from '../../assets/Images/home-bg.png';
import { ReactComponent as LinkedInIcon } from '../../assets/Icons/linkedin-icon.svg';
import { ReactComponent as DownloadIcon } from '../../assets/Icons/download-icon.svg';
import saveAs from 'file-saver';

function Home() {

  const downloadCv = () => {
    saveAs(
      process.env.PUBLIC_URL + "/resource/viniciusdalmazzo-cv.pdf",
      "viniciusdalmazzo-cv.pdf");
  }

  return (
    <Container>
      <ContentInfos>
        <h3>olá, eu sou</h3>
        <h1>vinicius dalmazzo</h1>
        <h3>desenvolvedor full stack.</h3>
        <ContainerButtons>
          <button onClick={() => {
            window.open('https://www.linkedin.com/in/vinicius-dalmazzo/', '_blank');
          }}>
            <LinkedInIcon />LinkedIn</button>
          <button onClick={downloadCv}><DownloadIcon />Currículo</button>
        </ContainerButtons>
      </ContentInfos>
      <BackgroundImage image={HomeBackgroundImg} />
    </Container>
  );
};

export default Home;
