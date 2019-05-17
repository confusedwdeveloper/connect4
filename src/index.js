import "./scss/styles.scss";
import Connect4 from "./Connect4";
import render from "./view";
import checkWin from "./win";

const connect = new Connect4(); // New instance of game
render(connect);

// wire up reset button
document.querySelector(".button").addEventListener("click", e => {
  connect.reset();
  render(connect);
});
