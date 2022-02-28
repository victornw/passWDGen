"use strict";

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789";
let passwd = " ";

function randomString(userInput) {
  for (let i = 0; i < userInput; i++) {
    passwd += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return passwd;
}
console.log(randomString(12));

document.querySelector(".send").addEventListener("click", function () {
  let userNumber = Number(document.querySelector("input").value);
  document.querySelector(".password").textContent = randomString(userNumber);
});
