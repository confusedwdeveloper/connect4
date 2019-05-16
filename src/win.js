// This module will contain all functions to check win or draw
// function to check if game drawn
const isDraw = connect => (connect.count === 42 ? true : false);

// function to check horizontal win
const checkHorizontal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  const newArr = arr[i];
  const four = newArr[j];
  const three = newArr[j - 1];
  const two = newArr[j - 2];
  const one = newArr[j - 3];
  const five = newArr[j + 1];
  const six = newArr[j + 2];
  const seven = newArr[j + 3];
  if (one + two + three + four === turn * 4) {
    return 1;
  }
  if (five + two + three + four === turn * 4) {
    return 1;
  }
  if (five + six + seven + four === turn * 4) {
    return 1;
  }
  if (six + five + three + four === turn * 4) {
    return 1;
  }
  return 0;
};

// function to check vertical win
const checkVertical = (connect, i, j, turn) => {
  const arr = [...connect.data];
  const four = arr[i][j];
  const three = arr[i - 1][j];
  const two = arr[i - 2][j];
  const one = arr[i - 3][j];
  const five = arr[i + 1][j];
  const six = arr[i + 2][j];
  const seven = arr[i + 3][j];
  if (one + two + three + four === turn * 4) {
    return 1;
  }
  if (five + two + three + four === turn * 4) {
    return 1;
  }
  if (five + six + seven + four === turn * 4) {
    return 1;
  }
  if (six + five + three + four === turn * 4) {
    return 1;
  }
  return 0;
};

// function to check right top to left bottom (rtlbDiagonal) diagonal
const rtlbDiagonal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  const four = arr[i][j];
  const three = arr[i - 1][j + 1];
  const two = arr[i - 2][j + 2];
  const one = arr[i - 3][j + 3];
  const five = arr[i + 1][j - 1];
  const six = arr[i + 2][j - 2];
  const seven = arr[i + 3][j - 3];

  if (one + two + three + four === turn * 4) {
    return 1;
  }
  if (five + two + three + four === turn * 4) {
    return 1;
  }
  if (five + six + seven + four === turn * 4) {
    return 1;
  }
  if (six + five + three + four === turn * 4) {
    return 1;
  }
  return 0;
};

// functionnto check left top to right bottom (ltrbDiagonal) diagonal
const ltrbDiagonal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  const four = arr[i][j];
  const three = arr[i - 1][j - 1];
  const two = arr[i - 2][j - 2];
  const three = arr[i - 3][j - 3];
  const five = arr[i + 1][j + 1];
  const six = arr[i + 2][j + 2];
  const seven = arr[i + 3][j + 3];

  if (one + two + three + four === turn * 4) {
    return 1;
  }
  if (five + two + three + four === turn * 4) {
    return 1;
  }
  if (five + six + seven + four === turn * 4) {
    return 1;
  }
  if (six + five + three + four === turn * 4) {
    return 1;
  }
  return 0;
};

// check Win function
const checkWin = (connect, i, j) => {
  // i is index of main array elements
  // j is index of elements in nested arrays
  // this function will return 0 for continue game 1 for player 1 , 2 for player 2 , 3 for tie

  const turn = connect.whoseTurn();

  connect.incrementCount(); // incrementing count when a move is done via click
  //   connect.calculateStatus(); // changing status so that game stops when won or tied

  if (isDraw(connect)) {
    return 3;
    connect._status = "stopped";
  }

  // check horizontal win
  if (checkHorizontal(connect, i, j, turn)) {
    return turn;
    connect._status = "stopped";
  }

  // Check vertical
  if (checkVertical(connect, i, j, turn)) {
    return turn;
    connect._status = "stopped";
  }

  // check right top to left bottom diagonal
  if (rtlbDiagonal(connect, i, j, turn)) {
    return turn;
    connect._status = "stopped";
  }

  // check left top to right bottom diagonal
  if (ltrbDiagonal(connect, i, j, turn)) {
    return turn;
    connect._status = "stopped";
  }
  return 0;
};

export { checkWin as default };
