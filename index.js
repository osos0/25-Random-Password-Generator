const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("text");
const copyEl = document.querySelector(".fa-copy");
const copyMesEl = document.querySelector(".copy-Mes");

btnEl.addEventListener("click", function () {
  creatPassword();
});

copyEl.addEventListener("click", function () {
  copypassword();
});

function creatPassword() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const passwordlengt = 14;
  let password = "";
  for (let i = 0; i < passwordlengt; i++) {
    const randnum = Math.ceil(Math.random() * characters.length);
    password += characters.slice(randnum, randnum + 1);
  }

  inputEl.value = password;
}

function copypassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inputEl.value);
}
