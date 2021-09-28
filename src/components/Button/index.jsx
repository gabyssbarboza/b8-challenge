import { useState } from "react";
import { Btn, Icon } from "./styled";

export const Button = () => {
  const [active, setActive] = useState(false);

  return (
    <Btn onClick={() => setActive(!active)} isActive={active}>
      {active ? (
        <span>
          <Icon />
          Adicionado
        </span>
      ) : (
        <span>Adicionar</span>
      )}
    </Btn>
  );
};
