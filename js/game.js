const startGame = () => {
  let ducksLeft = 2;
  let duckKilled = 0;
  let bulletsLeft = 3;
  let score = 0;
  createElements();
  const dog = document.querySelector(".dog");
  const duck = document.querySelector(".duck");

  const check = () => {
    requestAnimationFrame(check);
  };
  check();
  let i = 0;
  dog.onanimationend = () => {
    i++;
    if (i === 3) {
      startDuck();
    }
  };

  let j = 0;
  document.querySelector(".duck").onanimationend = () => {
    j++;
    if (ducksLeft > 0) {
      if (j === 4 && ducksLeft === 2) {
        ducksLeft = ducksLeft - 1;
        document
          .querySelector(".duck")
          .removeChild(document.querySelector(".duck").firstChild);
        setTimeout(() => {
          startDuck();
          ducksLeft = ducksLeft - 1;
          document.querySelector(".duck").onanimationend = () => {
            j++;
            if (j === 8 && ducksLeft === 0) {
              alert("u lost");
            }
          };
        }, 3000);
      }
    }
  };
  ///CLICKS
  duck.onclick = () => {
    ducksLeft = ducksLeft - 1;
    duckKilled = duckKilled + 1;
    bulletsLeft = bulletsLeft - 1;
    score = score + 500;
    console.log(ducksLeft);
    console.log(duckKilled);

    if (ducksLeft === 0 && duckKilled === 2) {
      alert("U won");
    }
    if (bulletsLeft === 0) {
      alert("U lost");
    }
    duckFall();
    let k = 0;
    duck.onanimationend = () => {
      k++;
      // if(ducks.left>0){
      if (k === 2 && ducksLeft > 0) {
        duck.removeChild(duck.firstChild);
        setTimeout(() => {
          let q = 0;
          startDuck();
          document.querySelector(".duck").onanimationend = () => {
            q++;
            if (q === 4 && ducksLeft === 0) {
              alert("u lost");
            }
          };
        }, 3000);
      }
      // }
    };
  };
  ////////////////////////////////////////////////////
  const play = document.getElementById("play");
  play.onclick = () => {
    play.className === "pause"
      ? (play.className = "start")
      : (play.className = "pause");
    duck.style.animationPlayState === ""
      ? (duck.style.animationPlayState = "paused")
      : duck.removeAttribute("style");

    dog.style.animationPlayState === ""
      ? (dog.style.animationPlayState = "paused")
      : dog.removeAttribute("style");
  };
  const restart = document.getElementById("restart");
  restart.onclick = () => {
    removeElements();
    startGame();
  };
};
