import { ReactNode } from 'react';
import styled from 'styled-components';

interface GlobalContainerProps {
  children: ReactNode;
  color: string;
}

const Container = styled.div<{color: string}>`
  background-color: ${({ color }) => color};
`

const Content = styled.div`
  padding-right: 10vw;
  padding-left: 10vw;

  @media all and (max-width: 1080px) {
   padding: 2vw;
  }
`

function GlobalContainer({ children, color }: GlobalContainerProps) {
  return (
    <Container color={color}>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default GlobalContainer;
