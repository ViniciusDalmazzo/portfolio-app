import styled from 'styled-components';
import { COLORS } from '../../styles/GlobalStyles';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.graylight};
  display: flex;
  flex-direction: row;

      > svg {
        margin-left: 10px;
      }
  }
`;
