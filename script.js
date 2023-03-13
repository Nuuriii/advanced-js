//======Scope=========

//Global variabel
let name = "Reza";

//Local Variabel
function nameUser() {
  let name = "reza";
}

//=====Control Flow======

//Ternary Operation
function fruitName(el) {
  return el ? "Kamu suka Buah?" : "hah kamu nggak suka buah?";
}
alert(fruitName("Banana"));

//If Else statement
function yourConditional(el) {
  if (el) {
    alert("Yeyy, you are typing in argument");
  } else {
    alert("Yahh, you are not typing?, Why?");
  }
}

//Switch-Case statement
let favoriteFruits;

function myFavoriteFruits(el) {
  switch (el) {
    case "Melon":
      favoriteFruits = "Aku juga suka melon";
      break;
    case "Strowbery":
      favoriteFruits = "Kecut cuy";
      break;
    case "Pepaya":
    case "Salak":
    case "Rambutan":
    case "Kelengkeng":
      favoriteFruits = "Aku juga suka buah itu";
      break;
    default:
      favoriteFruits = "Maaf buah yang anda cari belum terdaftar disini";
  }
  return favoriteFruits;
}
let fruits = favoriteFruits;
