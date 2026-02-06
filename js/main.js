const noBtn = document.querySelector(".no");
const alert = document.querySelector(".alert");
const yesBtn = document.querySelector(".yes");
const container = document.querySelector(".container");

let count = 0;
noBtn.addEventListener("mouseover", () => {
  count++;
  if (count > 5) {
    noBtn.style.display = "none";
    alert.innerHTML =
      "<div class='no-valentine' ><h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>";
  }
  const randomX = Math.floor(Math.random() * 500);
  const randomY = Math.floor(Math.random() * 500);
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  alert.innerHTML =
    "<div class='no-valentine' ><h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>";
});

yesBtn.addEventListener("click", () => {
  alert.innerHTML =
    "<div class='valentine'><h1>you are my valentine, i love you</h1><img src='images/Love.png' alt='heart' /> </div>";
  container.style.display = "none";
});
