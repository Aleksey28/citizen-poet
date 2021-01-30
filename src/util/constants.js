const categories = [
  {
    name: "ЖКХ",
    id: 1,
    color: "#fcbb6b",
  },
  {
    name: "Парковка",
    id: 2,
    color: "#1a263d",
  },
  {
    name: "Парки",
    id: 3,
    color: "#437345",
  },
  {
    name: "Теплосеть",
    id: 4,
    color: "#f7e2d9",
  },
  {
    name: "Мерия",
    id: 5,
    color: "#d87648",
  },
  {
    name: "Президент",
    id: 6,
    color: "#6792a4",
  },
  {
    name: "Соседи",
    id: 7,
    color: "#9a3535",
  },
  {
    name: "Животные",
    id: 8,
    color: "#c7a8a6",
  },
  {
    name: "Дети",
    id: 9,
    color: "#9297c7",
  },
];

const apiSettings = {
  baseUrl: "http://178.154.224.210",
  // baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
};

export { categories, apiSettings };
