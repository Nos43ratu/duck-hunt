const createElements = () => {
  const game = document.getElementById("game");
  const dog = document.createElement("div");
  const duck = document.createElement("div");
  const bullets = document.createElement("div");
  const score = document.createElement("div");
  score.className = "score";
  bullets.className = "bullets";
  dog.className = "dog";
  duck.className = "duck";
  game.appendChild(dog);
  game.appendChild(duck);
  game.appendChild(bullets);
  game.appendChild(score);
  let b1 = document.createElement("span");
  let b2 = document.createElement("span");
  let b3 = document.createElement("span");
  document.querySelector(".bullets").appendChild(b1);
  document.querySelector(".bullets").appendChild(b2);
  document.querySelector(".bullets").appendChild(b3);
};
const removeElements = () => {
  document.querySelector(".duck").remove();
  document.querySelector(".dog").remove();
  document.querySelector(".bullets").remove();
  document.querySelector(".score").remove();
};

window.addEventListener("load", function (event) {
  startGame();
});
