import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardBody = styled.div`
  background-color: var(--white);
  width: 304px;
  height: 568px;
  border-radius: 8px;
  padding: 32px;
  position: relative;

  img {
    width: 100%;
  }
`;

export const CardTitle = styled.h1`
  font-size: 0.875rem;
  color: var(--text);
  line-height: 20px;
  font-weight: 500;
  margin: 32px 0px 24px 0px;
`;

export const CardDiscount = styled.small`
  font-size: 0.875rem;
  color: var(--subtext);
  line-height: 20px;
  font-weight: 500;
  text-decoration: line-through;
  font-weight: 100;
`;

export const CardPrice = styled.p`
  color: var(--red);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 24px;
  margin: 4px 0px;
`;

export const CardObservation = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.005em;
  text-align: left;
  color: #848587;

  strong {
    color: var(--text);
    margin: 0 5px;
  }
`;
