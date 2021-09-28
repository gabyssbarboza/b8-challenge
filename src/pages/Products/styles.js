import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  height: 100vh;

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 2rem;
    height: auto;
  }
`;
