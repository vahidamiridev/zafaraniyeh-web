import { Menu } from "@/types/menu";
import { routes } from "@/data/routs";

const menuData: Menu[] = [
  {
    id: 1,
    title: "خانه",
    path:routes.HOME ,
    newTab: false,
  },
  {
    id: 2,
    title: "دوره های آموزشی",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "همه خدمات ",
        path: routes.SERVICES,
        newTab: false,
      },
      {
        id: 22,
        title: "زبان انگلیسی",
        path: routes.LANGUAGE_EN,
        newTab: false,
      },
      {
        id: 23,
        title: "زبان آلمانی",
        path: routes.LANGUAGE_DU,
        newTab: false,
      },
      {
        id: 24,
        title: "کامپیوتر ( عمومی و تخصصی)",
        path: routes.COMPUTER_GENERAL,
        newTab: false,
      },
      {
        id: 25,
        title: "برنامه نویسی کودک",
        path: routes.PROGRAMING_junior,
        newTab: false,
      },
      {
        id: 26,
        title: "برنامه نویسی پیشرفته",
        path: routes.PROGRAMING_PROFESSIONAL,
        newTab: false,
      },
      {
        id: 27,
        title: "هنرهای تجسمی و نقاشی",
        path: routes.ART,
        newTab: false,
      },
      {
        id: 28,
        title: "کارگاه های آموزشی",
        path: routes.WORKSHOP,
        newTab: false,
      },
    ],
  },


  {
    id: 3,
    title: "درباره ما",
    path: "/about",
    newTab: false,
  },

  {
    id: 4,
    title: "تماس با ما",
    path: "/contact",
    newTab: false,
  }
];
export default menuData;
