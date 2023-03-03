"use strict";


const products1 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

// Здесь пишем решение, данный комментарий необходимо стереть.
const result = products1.filter((item) => {
  if(item.photos >= [0]) return item;
})
console.log(result);

const result2 = products1.sort(function (a, b){
  if(a.price > b.price){
    return 1;
  }
  if(a.price < b.price){
  return -1;
  }
  return 0;
});
console.log(result2);