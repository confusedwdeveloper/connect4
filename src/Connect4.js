// This module will contain the class to start new connect 4 game, as well as associated methods

class Connect4 {
  childrenArray = [0, 0, 0, 0, 0, 0, 0];
  constructor() {
    this._count = 0; // to keep count of the game

    this._status = "playing"; // game status

    this.data = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }
  get count() {
    // getting count value
    return this._count;
  }
  incrementCount() {
    if (this.status === "playing") {
      this._count++;
      this.calculateStatus();
    }
    // increment count after a player has clicked
  }
  whoseTurn() {
    const player = this._count === 0 || this._count % 2 === 0 ? 1 : 2; // to find and print whose turn it is
    return player;
  }
  calculateStatus() {
    this._status = this._count === 42 ? "stopped" : "playing";
  }
  get status() {
    return this._status;
  }

  // a method to reset the game
  reset() {
    this._count = 0;
    this._status = "playing";
    this.data = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
  }
}

export { Connect4 as default };
