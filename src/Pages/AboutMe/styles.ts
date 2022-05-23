import styled from 'styled-components';
import { COLORS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  padding: 7vh 0 7vh 0;
`;

export const ContainerProfileImage = styled.div`
  height: 100%;
  width: 400px;
  margin-right: 8vw;
  background-color: ${COLORS.dark};
  border-left: 4px solid ${COLORS.primary};

  @media all and (max-width: 1080px) {
   display: none;
  }
`;

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 75%;
  gap: 40px;

  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  > span {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }

  > p {
    font-weight: 300;
    font-size: 18px;
    line-height: 32px;
    color: ${COLORS.graylight};
  }

  @media all and (max-width: 1080px) {
   gap: 5px;
  }

`;

export const ProfileImage = styled.div<{ image: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;