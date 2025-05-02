export const sortOptions = [
  { value: "count&order=desc", label: "Популярное" },
  { value: "count&order=ask", label: "Не популярное" },
  { value: "default", label: "По умолчанию" },
];
export const sections = [
  {
    id: "register",
    name: "Регистрация",
    color: 0xffdc33,
    radius: 0.4,
    distance: 2.5,
    angle: 0,
  },
  {
    id: "login",
    name: "Авторизация",
    color: 0xffdc33,
    radius: 0.4,
    distance: 2.5,
    angle: Math.PI * 0.3,
  },
  {
    id: "catalog",
    name: "Каталог",
    color: 0x9b59b6,
    radius: 0.4,
    distance: 4.0,
    angle: Math.PI * 0.5,
  },
  {
    id: "profile",
    name: "Профиль",
    color: 0x2ecc71,
    radius: 0.4,
    distance: 4,
    angle: Math.PI,
  },
];
