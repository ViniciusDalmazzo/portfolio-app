import { Container, Text } from './styles';
import {ReactComponent as LogoFooterIcon} from '../../assets/Icons/iuricode-logo-icon.svg';

function Footer() {
  return (
    <Container>
      <Text>@ 2022 - Vinicius Camargo</Text>
      <Text>Powered by <LogoFooterIcon /></Text>
    </Container>
  );
};

export default Footer;
