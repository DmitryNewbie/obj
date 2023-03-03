"use strict";



const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];


const obj ={};
for (let i = 0; i < en.length; i++) {
  obj[en[i]] = ru[i];
  
}
console.log(obj);