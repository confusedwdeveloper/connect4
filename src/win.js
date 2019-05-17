// This module will contain all functions to check win or draw
// function to check if game drawn
const isDraw = connect => (connect.count === 42 ? true : false);

// function to check horizontal win
const checkHorizontal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  const newArr = arr[i];
  let four = newArr[j];
  let three;
  try {
    three = newArr[j - 1];
  } catch (e) {
    three = 0;
  }
  let two;
  try {
    two = newArr[j - 2];
  } catch (e) {
    two = 0;
  }
  let one;
  try {
    one = newArr[j - 3];
  } catch (e) {
    one = 0;
  }
  let five;
  try {
    five = newArr[j + 1];
  } catch (e) {
    five = 0;
  }
  let six;
  try {
    six = newArr[j + 2];
  } catch (e) {
    six = 0;
  }
  let seven;
  try {
    seven = newArr[j + 3];
  } catch (e) {
    seven = 0;
  }

  if (one === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && six === turn && seven === turn && four === turn) {
    return 1;
  }
  if (six === turn && five === turn && three === turn && four === turn) {
    return 1;
  }
  return 0;
};

// function to check vertical win
const checkVertical = (connect, i, j, turn) => {
  const arr = [...connect.data];
  let four = arr[i][j];
  let three;
  try {
    three = arr[i - 1][j];
  } catch (e) {
    three = 0;
  }
  let two;
  try {
    two = arr[i - 2][j];
  } catch (e) {
    two = 0;
  }
  let one;
  try {
    one = arr[i - 3][j];
  } catch (e) {
    one = 0;
  }
  let five;
  try {
    five = arr[i + 1][j];
  } catch (e) {
    five = 0;
  }
  let six;
  try {
    six = arr[i + 2][j];
  } catch (e) {
    six = 0;
  }

  let seven;
  try {
    seven = arr[i + 3][j];
  } catch (e) {
    seven = 0;
  }

  if (one === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && six === turn && seven === turn && four === turn) {
    return 1;
  }
  if (six === turn && five === turn && three === turn && four === turn) {
    return 1;
  }
  return 0;
};

// function to check right top to left bottom (rtlbDiagonal) diagonal
const rtlbDiagonal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  let four = arr[i][j];
  let three;
  try {
    three = arr[i - 1][j + 1];
  } catch (e) {
    three = 0;
  }
  let two;
  try {
    two = arr[i - 2][j + 2];
  } catch (e) {
    two = 0;
  }
  let one;
  try {
    one = arr[i - 3][j + 3];
  } catch (e) {
    one = 0;
  }
  let five;
  try {
    five = arr[i + 1][j - 1];
  } catch (e) {
    five = 0;
  }
  let six;
  try {
    six = arr[i + 2][j - 2];
  } catch (e) {
    six = 0;
  }
  let seven;
  try {
    seven = arr[i + 3][j - 3];
  } catch (e) {
    seven = 0;
  }

  if (one === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && six === turn && seven === turn && four === turn) {
    return 1;
  }
  if (six === turn && five === turn && three === turn && four === turn) {
    return 1;
  }
  return 0;
};

// functionnto check left top to right bottom (ltrbDiagonal) diagonal
const ltrbDiagonal = (connect, i, j, turn) => {
  const arr = [...connect.data];
  let four = arr[i][j];
  let three;
  try {
    three = arr[i - 1][j - 1];
  } catch (e) {
    three = 0;
  }
  let two;
  try {
    two = arr[i - 2][j - 2];
  } catch (e) {
    two = 0;
  }
  let one;
  try {
    one = arr[i - 3][j - 3];
  } catch (e) {
    one = 0;
  }
  let five;
  try {
    five = arr[i + 1][j + 1];
  } catch (e) {
    five = 0;
  }
  let six;
  try {
    six = arr[i + 2][j + 2];
  } catch (e) {
    six = 0;
  }
  let seven;
  try {
    seven = arr[i + 3][j + 3];
  } catch (e) {
    seven = 0;
  }

  if (one === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && two === turn && three === turn && four === turn) {
    return 1;
  }
  if (five === turn && six === turn && seven === turn && four === turn) {
    return 1;
  }
  if (six === turn && five === turn && three === turn && four === turn) {
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
    connect._status = "stopped";
    return 3;
  }

  // check horizontal win
  if (checkHorizontal(connect, i, j, turn)) {
    connect._status = "stopped";
    return turn;
  }

  // Check vertical
  if (checkVertical(connect, i, j, turn)) {
    connect._status = "stopped";
    return turn;
  }

  // check right top to left bottom diagonal
  if (rtlbDiagonal(connect, i, j, turn)) {
    connect._status = "stopped";
    return turn;
  }

  // check left top to right bottom diagonal
  if (ltrbDiagonal(connect, i, j, turn)) {
    connect._status = "stopped";
    return turn;
  }
  return 0;
};

export { checkWin as default };
