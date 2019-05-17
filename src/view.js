// this module will contain things needed to render circles

// import Connect4 from "./Connect4";
import checkWin from "./win";

// function to generate div element
const generateDivElement = (connect, i, j, nestedChild) => {
  const paraEl = document.querySelector("#para");
  const divEl = document.createElement("div");
  divEl.classList.add("div");
  if (nestedChild === 1) {
    divEl.style.backgroundColor = "#fffc82";
  } else if (nestedChild === 2) {
    divEl.style.backgroundColor = "#fe6869";
  }

  // Most important part. adding event Listener
  divEl.addEventListener("click", e => {
    if (connect._status === "stopped") {
    } else {
      const arr = connect.data;
      let result;
      const x = connect.whoseTurn();
      if (arr[5][j] === 0) {
        arr[5][j] = x;
        result = checkWin(connect, 5, j);
        paraEl.style.display = "none";
      } else if (arr[4][j] === 0) {
        arr[4][j] = x;
        result = checkWin(connect, 4, j);
        paraEl.style.display = "none";
      } else if (arr[3][j] === 0) {
        arr[3][j] = x;
        result = checkWin(connect, 3, j);
        paraEl.style.display = "none";
      } else if (arr[2][j] === 0) {
        arr[2][j] = x;
        result = checkWin(connect, 2, j);
        paraEl.style.display = "none";
      } else if (arr[1][j] === 0) {
        arr[1][j] = x;
        result = checkWin(connect, 1, j);
        paraEl.style.display = "none";
      } else if (arr[0][j] === 0) {
        arr[0][j] = x;
        result = checkWin(connect, 0, j);
        paraEl.style.display = "none";
      } else {
        paraEl.style.display = "block";
      }

      render(connect);
      // Now use value of result
      // player color div
      const playerColorDiv = document.querySelector("#player-color");
      const resultEl = document.querySelector("#result");

      if (result === 3) {
        // connect._status = "stopped";
        playerColorDiv.style.display = "none";
        resultEl.textContent = "The Game is Tied";
        resultEl.style.display = "block";
      } else if (result === 2) {
        // connect._status = "stopped";
        playerColorDiv.style.display = "none";
        resultEl.textContent = "Player 2 Won!";
        resultEl.style.color = "#fe6869";
        resultEl.style.display = "block";
      } else if (result === 1) {
        // connect._status = "stopped";
        playerColorDiv.style.display = "none";
        resultEl.textContent = "Player 1 Won!";
        resultEl.style.color = "#fffc82";
        resultEl.style.display = "block";
      }
    }
  });

  return divEl;
};

const render = connect => {
  const rootEl = document.querySelector(".root");
  rootEl.innerHTML = "";
  connect.data.forEach((mainChild, i) => {
    mainChild.forEach((nestedChild, j) => {
      const divEl = generateDivElement(connect, i, j, nestedChild);
      rootEl.appendChild(divEl);
    });
  });
  const turn = connect.whoseTurn();
  const value = turn === 1 ? "#fffc82" : "#fe6869";
  document.querySelector("#player-color").style.backgroundColor = value;
};

export { render as default };
