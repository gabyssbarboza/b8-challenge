import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

export const Btn = styled.button`
  background-color: ${({ isActive }) =>
    isActive ? "var(--greenActive)" : "var(--green)"};
  width: 100%;
  height: 48px;
  border: 0;
  margin-top: 32px;

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${({ isActive }) => (isActive ? "var(--text)" : "var(--white)")};
  letter-spacing: -0.005em;
  transition: 0.3s ease-in-out;
  border-radius: 5px;

  text-transform: uppercase;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    background-color: var(--greenHover);
  }
`;

export const Icon = styled(FiCheck)``;
