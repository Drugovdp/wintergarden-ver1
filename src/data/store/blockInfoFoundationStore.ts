import { create } from "zustand";
import { TypeCardsWG, TypeElStore } from "../dataForPageWG";
import { dataBlockInfoFoundation, dataCardInfoFoundation } from "../dataBlockInfoFoundation";

export const foundationStore = create<TypeCardsWG>(() => ({
    cardsWG: dataBlockInfoFoundation
}))

export const titleFoundationStore = create<TypeElStore>(() => ({
    elemWG: dataCardInfoFoundation
}))
