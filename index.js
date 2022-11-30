const btnEl = document.querySelector(".btn");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// console.log();
// console.log(num);

btnEl.addEventListener("click", function () {
  const num = Math.ceil(Math.random() * 62);

  for (let i = 0; i < 16; i++) {
    console.log(i);
  }

  // console.log(characters[num]);
});
