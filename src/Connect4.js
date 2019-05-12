// This module will contain the class to start new connect 4 game, as well as associated methods

class Connect4 {
  childrenArray = [0, 0, 0, 0, 0, 0, 0];
  constructor() {
    this.count = 0; // to keep count of the game

    this._status = "playing"; // game status

    this.data = [
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray
    ];
  }
  get count() {
    // getting count value
    return this.count;
  }
  incrementCount() {
    if (this.status === "playing") {
      this.count++;
    }
    // increment count after a player has clicked
  }
  whoseTurn() {
    const player =
      this.count === 0 || this.count % 2 === 0 ? "First" : "Second"; // to find and print whose turn it is
    return `${player} player's turn`;
  }
  calculateStatus() {
    this._status = this.count === 42 ? "stopped" : "playing";
  }
  get status() {
    return this._status;
  }

  // a method to reset the game
  reset() {
    this._status = "playing";
    this.data = [
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray,
      this.childrenArray
    ];
  }
}

export { Connect4 as default };
