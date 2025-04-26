import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "دوره های آموزشی",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 22,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 23,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 24,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 25,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 26,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 27,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 28,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "مقالات",
    path: "/blog",
    newTab: false,
  },

  {
    id: 4,
    title: "درباره ما",
    path: "/about",
    newTab: false,
  },

  {
    id: 5,
    title: "تماس با ما",
    path: "/contact",
    newTab: false,
  }
];
export default menuData;
