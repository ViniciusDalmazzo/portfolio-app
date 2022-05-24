import styled from 'styled-components';
import { COLORS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  height: 50vh;  
  display: flex;
  flex-direction: column;
  padding: 7vh 0 7vh 0;

  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
  }

  @media all and (max-width: 742px) {
    height: auto;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  @media all and (max-width: 742px) {
    flex-direction: column;
  }
`;

export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 6rem;
  width: 15rem;

  @media all and (max-width: 742px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const Menu = styled.p<{selected: boolean}>`
    padding: 18px 42px 18px 42px;
    cursor: pointer;
    border-left: 2px solid ${COLORS.dark200};

    ${({ selected }) => selected && `
      border-left: 2px solid ${COLORS.primary};
    `}
    
    &:hover{
      background-color: ${COLORS.dark200};
      border-left: 2px solid ${COLORS.primary};
    }
`;

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 100%;
  gap: 1rem;

  > span {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }

  > p {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: ${COLORS.graylight}
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CompanyName = styled.div`
  color: ${COLORS.primary};
  font-size: 1rem;
  line-height: 2rem;
`;