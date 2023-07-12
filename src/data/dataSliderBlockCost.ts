import { v1 } from "uuid";
import imgCard1_1 from '../Images/imgCard1_1.jpg'
import imgCard1_2 from '../Images/imgCard1_2.jpg'
import imgCard2_1 from '../Images/imgCard2_1.jpg'
import imgCard2_2 from '../Images/imgCard2_2.jpg'
import imgCard3_1 from '../Images/imgCard3_1.jpg'
import imgCard3_2 from '../Images/imgCard3_2.jpg'
import imgCard3_3 from '../Images/imgCard3_3.jpg'
import imgCard3_4 from '../Images/imgCard3_4.jpg'
import imgCard4_1 from '../Images/imgCard4_1.jpg'
import imgCard4_2 from '../Images/imgCard4_2.jpg'
import imgCard5_1 from '../Images/imgCard5_1.jpg'
import imgCard5_2 from '../Images/imgCard5_2.jpg'
import imgCard5_3 from '../Images/imgCard5_3.jpg'

export type TypeCardInfo = {
    id: string
    src: string
    alt: string
    title: string
    isCheck: boolean
}

export type TypeCards = {
    id: string
    header: string
    cardInfo: Array<TypeCardInfo>
}

export type TypeStore = {
    valueCards: Array<TypeCards>
}

export const dataSliderBlockCost = [
    {
        id: v1(),
        header: 'Проектирование',
        cardInfo: [
            { id: v1(), src: imgCard1_1, alt: 'imgCard1_1', title: 'Есть готовый проект', isCheck: false },
            { id: v1(), src: imgCard1_2, alt: 'imgCard1_2', title: 'Требуется создание индивидуального проекта', isCheck: false }
        ]
    },
    {
        id: v1(),
        header: 'Тип остекления',
        cardInfo: [
            { id: v1(), src: imgCard2_1, alt: 'imgCard2_1', title: 'Теплое (для круглосуточного использования)', isCheck: false },
            { id: v1(), src: imgCard2_2, alt: 'imgCard2_2', title: 'Холодное (используется летом, в остальное время года защищает от осадков)', isCheck: false }
        ]
    },
    {
        id: v1(),
        header: 'Тип конструкции',
        cardInfo: [
            { id: v1(), src: imgCard3_1, alt: 'imgCard3_1', title: 'Интегрированный в дом', isCheck: false },
            { id: v1(), src: imgCard3_2, alt: 'imgCard3_2', title: 'Пристройка к дому', isCheck: false },
            { id: v1(), src: imgCard3_3, alt: 'imgCard3_3', title: 'Отдельно стоящее сооружение', isCheck: false },
            { id: v1(), src: imgCard3_4, alt: 'imgCard3_4', title: 'Требуется консультация специалиста', isCheck: false }
        ]
    },
    {
        id: v1(),
        header: 'Потребуется ли монтаж?',
        cardInfo: [
            { id: v1(), src: imgCard4_1, alt: 'imgCard4_1', title: 'Да', isCheck: false },
            { id: v1(), src: imgCard4_2, alt: 'imgCard4_2', title: 'Нет', isCheck: false }
        ]
    },
    {
        id: v1(),
        header: 'Срок начала выполнения заказа?',
        cardInfo: [
            { id: v1(), src: imgCard5_1, alt: 'imgCard5_1', title: 'В ближайшее время', isCheck: false },
            { id: v1(), src: imgCard5_2, alt: 'imgCard5_2', title: 'В течении месяца', isCheck: false },
            { id: v1(), src: imgCard5_3, alt: 'imgCard5_3', title: 'В текущем сезоне', isCheck: false }
        ]
    },
    {
        id: v1(),
        header: 'Спасибо за предоставленные ответы',
        cardInfo: [
            { id: v1(), src: '', alt: '', title: 'Оставьте свой номер телефона и наш менеджер свяжется с Вами, для расчета стоимости и фикцации суммы на 14 дней', isCheck: false }
        ]
    }
]