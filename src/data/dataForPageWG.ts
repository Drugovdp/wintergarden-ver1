import { v1 } from "uuid"
import WinterGarden from '../Images/WinterGarden.png'
import Greenhouse from '../Images/Greenhouse.png'
import VerandaPatio from '../Images/VerandaPatio.png'
import GlassRoof from '../Images/GlassRoof.png'
import SwimmingPool from '../Images/SwimmingPool.png'
import Terrarium from '../Images/Terrarium.png'
import winterGarden1 from '../ImagesWinterGarden/winterGarden1.png'
import winterGarden2 from '../ImagesWinterGarden/winterGarden2.png'
import winterGarden3 from '../ImagesWinterGarden/winterGarden3.png'
import greenhouse1 from '../ImagesWinterGarden/greenhouse1.png'
import greenhouse2 from '../ImagesWinterGarden/greenhouse2.png'
import greenhouse3 from '../ImagesWinterGarden/greenhouse3.png'
import VerandaPatio1 from '../ImagesWinterGarden/VerandaPatio1.png'
import VerandaPatio2 from '../ImagesWinterGarden/VerandaPatio2.png'
import VerandaPatio3 from '../ImagesWinterGarden/VerandaPatio3.png'
import glassRoof1 from '../ImagesWinterGarden/glassRoof1.png'
import glassRoof2 from '../ImagesWinterGarden/glassRoof2.png'
import glassRoof3 from '../ImagesWinterGarden/glassRoof3.png'
import SwimmingPoolGlass1 from '../ImagesWinterGarden/SwimmingPoolGlass1.png'
import SwimmingPoolGlass2 from '../ImagesWinterGarden/SwimmingPoolGlass2.png'
import SwimmingPoolGlass3 from '../ImagesWinterGarden/SwimmingPoolGlass3.png'
import Terrarium1 from '../ImagesWinterGarden/Terrarium1.png'
import Terrarium2 from '../ImagesWinterGarden/Terrarium2.png'
import Terrarium3 from '../ImagesWinterGarden/Terrarium3.png'

export type TypeCardsWGElem = {
    id: string
    title: string
    src: string
    alt: string
  }
  
  export type TypeCardsWG = {
    cardsWG: TypeCardsWGElem[]
  }

export const idCard = [v1(), v1(), v1(), v1(), v1(), v1()]

export const dataForPage = [
  {id: idCard[0], src: WinterGarden, alt: 'WinterGarden', title: "Зимний сад"},
  {id: idCard[1], src: Greenhouse, alt: 'Greenhouse', title: "Оранжерея"},
  {id: idCard[2], src: VerandaPatio, alt: 'VerandaPatio', title: "Веранда или патио"},
  {id: idCard[3], src: GlassRoof, alt: 'GlassRoof', title: "Крыша из стекла"},
  {id: idCard[4], src: SwimmingPool, alt: 'SwimmingPool', title: "Бассейн под стеклянной крышей"},
  {id: idCard[5], src: Terrarium, alt: 'Terrarium', title: "Террариум"}
]

export type TypeElem = {
  id: string
  src: string
  alt: string
}

export type TypeElemContent = {
  title: string
  description: string
  content: Array<TypeElem>
}

export type TypeEl = {
  [key: string]: TypeElemContent
}

export type TypeElStore = {
  elemWG: TypeEl;
}

export const dataWinterGarden = {
  [idCard[0]]: {
    title: "Зимний сад",
    description:
      "Красивый архитектурный элемент, который прибавит шарм и изысканность, стиль и характер любому сооружению, выделяя дом из окружающих строений. чаще всего служит продолжением гостиной или столовой, представляет собой постройку или помещение внутри дома с полным или частичным остеклением. используется как зона отдыха, здесь размещают и растения, и мебель. Отличие от обычных жилых комнат - в поддержании постоянного микроклимата, интенсива освещения. в таких сооруженияхпрекрасно растут комнатные и экзотические растения.",
    content: [
      {
        id: v1(),
        src: winterGarden1,
        alt: "winterGarden1",
      },
      {
        id: v1(),
        src: winterGarden2,
        alt: "winterGarden2",
      },
      {
        id: v1(),
        src: winterGarden3,
        alt: "winterGarden3",
      },
    ],
  },
  [idCard[1]]: {
    title: "Оранжерея",
    description:
      "Пристройка к дому или отдельно стоящее здание, где поддерживается заданный микроклимат. используется для разведения экзотических, теплолюбивых видов, а также выращивание овощей и фруктов в любое время года, оборудована зоной отдыха или дорожками для прогулок.",
    content: [
      {
        id: v1(),
        src: greenhouse1,
        alt: "greenhouse1",
      },
      {
        id: v1(),
        src: greenhouse2,
        alt: "greenhouse2",
      },
      {
        id: v1(),
        src: greenhouse3,
        alt: "greenhouse3",
      },
    ],
  },
  [idCard[2]]: {
      title: "Веранда или патио",
      description:
        "Элемент ландшафтного дизайна, который позволяет обустроить оригинальный по стилю и неповторимый по задумке уголок уюта для отдыха и приема пищи. Обустройство патио — бесконечный простор для творчества и полёта фантазии, всё будет к месту: клумба, ручей, водопад, сад камней и альпийская горка, а романтические светильники, как раз удобно разместить под навесом. Удачно подобранные элементы ландшафтного дизайна придадут внутреннему дворику дополнительный шарм и очарование.",
      content: [
        {
          id: v1(),
          src: VerandaPatio1,
          alt: "VerandaPatio1",
        },
        {
          id: v1(),
          src: VerandaPatio2,
          alt: "VerandaPatio2",
        },
        {
          id: v1(),
          src: VerandaPatio3,
          alt: "VerandaPatio3",
        },
      ],
    },
    [idCard[3]]: {
      title: "Крыша из стекла",
      description:
        "Стеклянная крыша – изысканное решение, невесомое на вид прозрачное сооружение служит органичным продолжением помещения, значительно расширяя его границы. За окном может дуть холодный ветер или накрапывать дождь, обжигать испепеляющее солнце или лютовать мороз, но внутри будут царить тепло и уют. Красота и изящество для романтиков, мечтающих спать под звездами.",
      content: [
        {
          id: v1(),
          src: glassRoof1,
          alt: "glassRoof1",
        },
        {
          id: v1(),
          src: glassRoof2,
          alt: "glassRoof2",
        },
        {
          id: v1(),
          src: glassRoof3,
          alt: "glassRoof3",
        },
      ],
    },
    [idCard[4]]: {
      title: "Бассейн под стеклянной крышей",
      description:
        "Использовать пространство, как собственный бассейн в любое время года ощущать себя в тропической стране, где можно расслабиться, поплавать под открытым небом и приятно провести время с семьей и друзьями.",
      content: [
        {
          id: v1(),
          src: SwimmingPoolGlass1,
          alt: "SwimmingPoolGlass1",
        },
        {
          id: v1(),
          src: SwimmingPoolGlass2,
          alt: "SwimmingPoolGlass2",
        },
        {
          id: v1(),
          src: SwimmingPoolGlass3,
          alt: "SwimmingPoolGlass3",
        },
      ],
    },
    [idCard[5]]: {
      title: "Террариум",
      description:
        "Идеальный способ содержания экзотических животных, таких как ящерицы, змеи и земноводные. Террариум представляет собой безопасную и закрытую среду обитания, которая обеспечивает свет, вентиляцию и защиту. Это также позволяет контролировать температуру и влажность в соответствии с потребностями животного.",
      content: [
        {
          id: v1(),
          src: Terrarium1,
          alt: "Terrarium1",
        },
        {
          id: v1(),
          src: Terrarium2,
          alt: "Terrarium2",
        },
        {
          id: v1(),
          src: Terrarium3,
          alt: "Terrarium3",
        },
      ],
    },
}