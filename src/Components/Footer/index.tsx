import { Container } from './styles';
import {ReactComponent as LogoFooterIcon} from '../../assets/Icons/iuricode-logo-icon.svg';

function Footer() {
  return (
    <Container>
      <span>@ 2022 - Vinicius Dalmazzo</span>
      <span>Powered by <LogoFooterIcon /></span>
    </Container>
  );
};

export default Footer;
