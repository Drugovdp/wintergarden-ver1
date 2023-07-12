import { create } from "zustand";
import { TypeCardsWG, TypeElStore, dataForPage, dataWinterGarden } from "../dataForPageWG";

export const cardStore = create<TypeCardsWG>(() => ({
  cardsWG: dataForPage
}))

type TypeStoresHandler = {
  changeFoto: (cardID: string, i: number) => void;
}

export const titleCardsStore = create<TypeElStore & TypeStoresHandler>((set) => ({
  elemWG: dataWinterGarden,
  changeFoto: (cardID, i) => {
    set((state) => {
      const content = [...state.elemWG[cardID].content]
      content.splice(0, 1)
      content.splice(0, 0, state.elemWG[cardID].content[i])
      content.splice(i, 1, state.elemWG[cardID].content[0])
      return {
        elemWG: {
          ...state.elemWG,
          [cardID]: {
            ...state.elemWG[cardID],
            content,
          },
        },
      };
    });
  },
}))
