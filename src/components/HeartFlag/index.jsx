import { useState } from "react";
import { Content, HeartInactive, HeartActive } from "./styles";

export const HeartFlag = ({ isFavorite, id, handleFavorite }) => {
  return (
    <Content isFavorite={isFavorite} onClick={() => handleFavorite(id)}>
      {isFavorite ? <HeartActive /> : <HeartInactive />}
    </Content>
  );
};
