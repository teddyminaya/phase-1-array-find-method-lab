function superbowlWin(record) {
    for (const game of record) {
      if (game.result === "W") {
        return game.year;
      }
    }
    return undefined;
  }