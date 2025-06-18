import { createContext, useContext, useState } from "react";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(null);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};

const useCardsContext = () => {
  return useContext(CardsContext);
};

export { CardsProvider, useCardsContext };
