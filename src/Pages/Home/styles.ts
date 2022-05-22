import styled from 'styled-components';
import { COLORS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 80%;
  text-transform: uppercase;
  z-index: 2;
  background: transparent;

  > h1{
    color: ${COLORS.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    margin: 12px 0 12px 0;
  }

  > h3{
    color: ${COLORS.white};
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 29px;
    text-align: justify;
  }
`;

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
margin-top: 50px;

> button{
  text-align: center;
  height: 40px;
  padding: 1rem;
  font-size: 1rem;
  padding: .5rem 3rem;
  color: ${COLORS.white};
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 2px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(269.96deg, #10D7E2 0%, #9358F7 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px ${COLORS.black} inset;

  >svg {
    background: transparent;
  }
  }

  > button:hover{
    box-shadow: none;
    color: white;
  }
`;


export const BackgroundImage = styled.div<{ image: string }>`
  position: fixed;
  right: 0;
  height: 95vh;
  width: 60vw;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: contain;
`;
