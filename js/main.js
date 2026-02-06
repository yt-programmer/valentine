const noBtn = document.querySelector(".no");
const alert = document.querySelector(".alert");
const yesBtn = document.querySelector(".yes");
const container = document.querySelector(".container");
const noValentine = document.querySelector(".no-valentine");

let count = 0;

const exitWindow = (e) => {
  if (e.target.closest(".no-valentine")) {
    alert.innerHTML = "";
  }
};

const noBtnFun = () => {
  count++;
  if (count > 5) {
    noBtn.style.display = "none";
    alert.innerHTML = `<div class='no-valentine' > <button class='btn exit'>Exit </button> <h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>`;

    const exitBtn = alert.querySelector(".exit");
    exitBtn.addEventListener("click", () => {
      alert.innerHTML = "";
    });
    return;
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
noBtn.addEventListener("touchstart", noBtnFun);

noBtn.addEventListener("click", () => {
  if (innerWidth > 720) {
    noBtn.style.display = "none";
    alert.innerHTML = `<div class='no-valentine' > <button class='btn exit'>Exit </button> <h1>stop messing with me</h1> <img src='images/gun.avif' alt='heart' /></div>`;

    const exitBtn = alert.querySelector(".exit");
    exitBtn.addEventListener("click", () => {
      alert.innerHTML = "";
    });
  }
});

yesBtn.addEventListener("click", () => {
  alert.innerHTML =
    "<div class='valentine'><h1>you are my valentine, i love you</h1><img src='images/Love.png' alt='heart' /> </div>";
  container.style.display = "none";
});
