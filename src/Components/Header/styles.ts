import styled from 'styled-components';
import { COLORS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid ${COLORS.dark200};
`;

export const Logo = styled.div`
  display: flex;
  color: ${COLORS.primary};
  font-size: 20px;
  align-items: center;
  text-transform: uppercase;
`;

export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: lighter;
  
  > span {
    margin: 1rem;
    cursor: pointer;
  }

  > span:hover{
    opacity: 0.8;
    color: ${COLORS.primary};
  }
`;