const colors = [
  "#E76b74",
  "#EA526F",
  "#6F9CD6",
  "#32C641",
  "#4D243D",
  "#0FA3B1",
  "#DC0073",
  "#008BF8",
  "#04E762",
  "#631D76",
  "#9E4770",
  "#E8871E",
  "#587B7F",
  "#1c6ec7",
  "#114B5F",
  "#F45B69",
  "#6B2737",
  "#0072BB",
  "#B6174B",
  "#306B34",
  "#1C5253",
  "#00916E",
  "#432534",
  "#183A37",
  "#2D93AD",
  "#88AB75",
  "#295135",
];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
export const getRandomColor = (name) => {
  if (name.slice(0, 1).toLowerCase()) {
    return colors[letters.indexOf(name.slice(0, 1).toLowerCase())];
  } else return colors(25);
};
