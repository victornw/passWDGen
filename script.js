"use strict";

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789";
let passwd = " ";

function randomString(userInput) {
  for (let i = 0; i < userInput; i++) {
    passwd += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return passwd;
}

document.querySelector(".send").addEventListener("click", function () {
  let userNumber = Number(document.querySelector("input").value);
  if (userNumber < 0 || userNumber > 22) {
    return alert("Type a number between 1 and 22");
  } else {
    document.querySelector(".password").textContent = randomString(userNumber);
    passwd = "";
  }
});

//Fazer:
//Limite de valor no input ✅
// auto ctrl c
