const categories = [
  {
    name: "ЖКХ",
    id: 1,
    color: "#FCBB6B"
  },
  {
    name: "Парковка",
    id: 2,
    color: "#1A263D"
  },
  {
    name: "Парки",
    id: 3,
    color: "#437345"
  },
  {
    name: "Теплосеть",
    id: 4,
    color: "#F7E2D9"
  },
  {
    name: "Мерия",
    id: 5,
    color: "#D87648"
  },
  {
    name: "Президент",
    id: 6,
    color: "#6792A4"
  },
  {
    name: "Соседи",
    id: 7,
    color: "#9A3535"
  },
  {
    name: "Животные",
    id: 8,
    color: "#C7A8A6"
  },
  {
    name: "Дети",
    id: 9,
    color: "#9297C7"
  },
]

const apiSettings = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    'Content-Type': 'application/json',
  },
};

export {categories, apiSettings};
