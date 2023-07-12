import { create } from "zustand";
import { TypeStore, dataSliderBlockCost } from "../dataSliderBlockCost";

type TypeSetValueCards = {
  setValueCards: (cID: string, id: string, isCheck: boolean) => void;
};

export const useStoreSliderBlockCost = create<TypeStore & TypeSetValueCards>(
  (set) => ({
    valueCards: dataSliderBlockCost,
    setValueCards: (cID, id, isCheck) => {
      set((state) => {
        return {
          valueCards: state.valueCards.map((elem) => elem.id === cID
              ? 
                {
                  ...elem, cardInfo: elem.cardInfo.map((el) => el.id === id ? { ...el, isCheck: isCheck } : { ...el, isCheck: false })
                }
              : elem
          )
        }
      })
    }
  })
)
