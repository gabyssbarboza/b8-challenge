import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const HeartInactive = styled(FaRegHeart)`
  color: var(--text);
  width: 24px;
  height: 24px;
  transition: 0.3s ease-in-out;
`;

export const HeartActive = styled(FaHeart)`
  color: var(--white);
  width: 24px;
  height: 24px;
  transition: 0.3s ease-in-out;
`;

export const Content = styled.div`
  position: absolute;
  right: 22px;
  cursor: pointer;

  background-color: ${({ isFavorite }) =>
    isFavorite ? "var(--red)" : "var(--grey)"};
  width: 48px;
  border-radius: 50%;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isFavorite }) =>
      isFavorite ? "var(--redStrong)" : "var(--heartBgHover)"};
    transition: 0.3s ease-in-out;
    ${HeartInactive} {
      color: var(--red);
    }

    ${HeartActive} {
      color: var(--white);
    }
  }
`;
