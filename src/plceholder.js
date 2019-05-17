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
