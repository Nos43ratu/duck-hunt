const duckFly = () => {
  const speed = 300;
  const windowWith = 850;
  const windowHeight = 500;
  let cords = [{ x: -75, y: 0 }];
  let times = [];
  const animate = document.createElement("style");
  animate.type = "text/css";
  /////////////////////////////////////////////////////////////////////////////
  for (let i = 2; i < 5; i++) {
    cords.push({
      x: Math.floor(Math.random() * (windowWith - 0 + 1)) + 0,
      y: Math.floor(Math.random() * (windowHeight - 0 + 1)) + 0,
    });
  }
  for (let i = 0; i < 4; i++) {
    if (times.length < 3) {
      times.push(
        Math.sqrt(
          (cords[i + 1].x - cords[i].x) * (cords[i + 1].x - cords[i].x) +
            (cords[i + 1].y - cords[i].y) * (cords[i + 1].y - cords[i].y)
        ) / speed
      );
    } else {
      times.push(
        Math.sqrt(
          (850 - cords[i].x) * (850 - cords[i].x) +
            (500 - cords[i].y) * (500 - cords[i].y)
        ) / speed
      );
    }
  }
  const whatDirection = (x1, x2) => (x2 - x1 > 1 ? "right" : "left");
  let rules = document.createTextNode(
    `
          @-webkit-keyframes path1 {` +
      `0% { left:${cords[0].x}px; top:${
        cords[0].y
      }; background: url("../assets/game/duck/${whatDirection(
        cords[0].x,
        cords[1].x
      )}_0.png") } ` +
      `25% { left:${(cords[1].x - cords[0].x) / 4 + cords[0].x}px; top:${
        (cords[1].y - cords[0].y) / 4 + cords[0].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[0].x,
        cords[1].x
      )}_1.png") }` +
      `50% { left:${(cords[1].x - cords[0].x) / 2 + cords[0].x}px; top:${
        (cords[1].y - cords[0].y) / 2 + cords[0].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[0].x,
        cords[1].x
      )}_2.png") }` +
      `75% { left:${((cords[1].x - cords[0].x) / 4) * 3 + cords[0].x}px; top:${
        ((cords[1].y - cords[0].y) / 4) * 3 + cords[0].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[0].x,
        cords[1].x
      )}_0.png") }` +
      `100% { left:${cords[1].x}px; top:${
        cords[1].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[0].x,
        cords[1].x
      )}_1.png") }` +
      `}
          
          @-webkit-keyframes path2 {` +
      `0% { left:${cords[1].x}px; top:${
        cords[1].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[1].x,
        cords[2].x
      )}_0.png") } ` +
      `25% { left:${(cords[2].x - cords[1].x) / 4 + cords[1].x}px; top:${
        (cords[2].y - cords[1].y) / 4 + cords[1].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[1].x,
        cords[2].x
      )}_1.png") }` +
      `50% { left:${(cords[2].x - cords[1].x) / 2 + cords[1].x}px; top:${
        (cords[2].y - cords[1].y) / 2 + cords[1].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[1].x,
        cords[2].x
      )}_2.png") }` +
      `75% { left:${((cords[2].x - cords[1].x) / 4) * 3 + cords[1].x}px; top:${
        ((cords[2].y - cords[1].y) / 4) * 3 + cords[1].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[1].x,
        cords[2].x
      )}_0.png") }` +
      `100% { left:${cords[2].x}px; top:${
        cords[2].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[1].x,
        cords[2].x
      )}_1.png") }` +
      `}
          @-webkit-keyframes path3 {` +
      `0% { left:${cords[2].x}px; top:${
        cords[2].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[2].x,
        cords[3].x
      )}_0.png") } ` +
      `25% { left:${(cords[3].x - cords[2].x) / 4 + cords[2].x}px; top:${
        (cords[3].y - cords[2].y) / 4 + cords[2].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[2].x,
        cords[3].x
      )}_1.png") }` +
      `50% { left:${(cords[3].x - cords[2].x) / 2 + cords[2].x}px; top:${
        (cords[3].y - cords[2].y) / 2 + cords[2].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[2].x,
        cords[3].x
      )}_2.png") }` +
      `75% { left:${((cords[3].x - cords[2].x) / 4) * 3 + cords[2].x}px; top:${
        ((cords[3].y - cords[2].y) / 4) * 3 + cords[2].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[2].x,
        cords[3].x
      )}_0.png") }` +
      `100% { left:${cords[3].x}px; top:${
        cords[3].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[2].x,
        cords[3].x
      )}_1.png") }` +
      `}
          @-webkit-keyframes path4 {` +
      `0% { left:${cords[3].x}px; top:${
        cords[3].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[3].x,
        850
      )}_0.png") } ` +
      `25% { left:${(850 - cords[3].x) / 4 + cords[3].x}px; top:${
        (0 - cords[3].y) / 4 + cords[3].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[3].x,
        850
      )}_1.png") }` +
      `50% { left:${(850 - cords[3].x) / 2 + cords[3].x}px; top:${
        (0 - cords[3].y) / 2 + cords[3].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[3].x,
        850
      )}_2.png") }` +
      `75% { left:${((850 - cords[3].x) / 4) * 3 + cords[3].x}px; top:${
        ((0 - cords[3].y) / 4) * 3 + cords[3].y
      }px; background: url("../assets/game/duck/${whatDirection(
        cords[3].x,
        850
      )}_0.png") }` +
      `100% { left:${850}px; top:${0}px; background: url("../assets/game/duck/${whatDirection(
        cords[3].x,
        850
      )}_1.png") }` +
      `}
          .duck { position:absolute;
                 animation: 
                 path1 ${times[0]}s linear forwards,
                 ${times[1]}s path2 ${times[0]}s linear forwards,
                 ${times[2]}s path3 ${times[0] + times[1]}s linear forwards,
                 ${times[3]}s path4 ${
        times[0] + times[1] + times[2]
      }s linear forwards 
              }`
  );
  animate.appendChild(rules);
  document.querySelector(".duck").appendChild(animate);
};

const duckFall = () => {
  const falling = document.createElement("style");
  const left = document.querySelector(".duck").offsetLeft;
  const top = document.querySelector(".duck").offsetTop;
  falling.type = "text/css";
  let rules = document.createTextNode(
    `
        @-webkit-keyframes dead {` +
      `0% { left:${left}px; top:${top}px; background: url("../assets/game/duck/killed.png") } ` +
      `100% { left:${left}px; top:${top}px; background: url("../assets/game/duck/falling_0.png"); }` +
      `}
        @-webkit-keyframes falling {` +
      `0% { left:${left}px; top:${top}px; background: url("../assets/game/duck/falling_1.png") } ` +
      `25% { left:${left}px; top:${
        (500 - top) / 4 + top
      }px; background: url("../assets/game/duck/falling_2.png") } ` +
      `50% { left:${left}px; top:${
        (500 - top) / 2 + top
      }px; background: url("../assets/game/duck/falling_0.png") }` +
      `75% { left:${left}px; top:${
        ((500 - top) / 4) * 3 + top
      }px; background: url("../assets/game/duck/falling_1.png") }` +
      `100% { left:${left}px; top:${500}px; background: url("../assets/game/duck/falling_2.png"); opacity:0 }` +
      `}
            .duck { position:absolute;
                   animation: 
                   dead 1s linear forwards, ${1.5}s falling ${1}s linear forwards
                }`
  );
  falling.appendChild(rules);
  document.querySelector(".duck").appendChild(falling);
};

const startDuck = () => {
  const dog = document.querySelector(".dog");
  let i = 0;
  dog.onanimationend = () => {
    i++;
    if (i === 3) {
      console.log("asda");
    }
  };
  duckFly();
};
