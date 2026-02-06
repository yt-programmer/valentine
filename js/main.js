const noBtn = document.querySelector(".no");
const alert = document.querySelector(".alert");
const yesBtn = document.querySelector(".yes");
const container = document.querySelector(".container");
const noValentine = document.querySelector(".no-valentine");

let count = 0;

const noBtnFun = () => {
  count++;
  if (count > 5) {
    noBtn.style.display = "none";
    alert.innerHTML =
      "<div class='no-valentine' ><h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>";
  }

  let randomX;
  let randomY;
  randomX =
    window.innerWidth <= 500
      ? Math.floor(Math.random() * 100)
      : Math.floor(Math.random() * 250);
  randomY =
    window.innerWidth <= 500
      ? Math.floor(Math.random() * 100)
      : Math.floor(Math.random() * 250);
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
};
noBtn.addEventListener("mouseover", noBtnFun);
// noBtn.addEventListener("touchstart", noBtnFun);

// noBtn.addEventListener("click", () => {
//   noBtn.style.display = "none";
//   alert.innerHTML =
//     "<div class='no-valentine' ><p>enter on the screen to exit from here </p> <h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>";
// });

yesBtn.addEventListener("click", () => {
  alert.innerHTML =
    "<div class='valentine'><h1>you are my valentine, i love you</h1><img src='images/Love.png' alt='heart' /> </div>";
  container.style.display = "none";
});

alert.addEventListener("click", (e) => {
  if (e.target.closest(".no-valentine")) {
    alert.innerHTML = "";
  }
});
