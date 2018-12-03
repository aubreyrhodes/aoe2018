class Day03 {
  static getInches(claim) {
    const elements = claim.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
    const leftPadding = parseInt(elements[2], 10);
    const topPadding = parseInt(elements[3], 10);
    const width = parseInt(elements[4], 10);
    const height = parseInt(elements[5], 10);

    const squares = [];

    for (let j = 0; j < width; j += 1) {
      for (let i = 0; i < height; i += 1) {
        squares.push([i + topPadding, j + leftPadding]);
      }
    }

    return squares;
  }

  static getOverlaps(data) {
    const claims = data.trim().split('\n');
    const visitedSquares = {};
    claims.forEach((claim) => {
      this.getInches(claim).forEach((inch) => {
        const key = `${inch[0]},${inch[1]}`;
        if (visitedSquares[key] === undefined) {
          visitedSquares[key] = 1;
        } else {
          visitedSquares[key] += 1;
        }
      });
    });
    return Object.values(visitedSquares).filter(i => i > 1).length;
  }

  static getNonOverlaps(data) {
    const claims = data.trim().split('\n');
    const visitedSquares = {};
    claims.forEach((claim) => {
      this.getInches(claim).forEach((inch) => {
        const key = `${inch[0]},${inch[1]}`;
        if (visitedSquares[key] === undefined) {
          visitedSquares[key] = 1;
        } else {
          visitedSquares[key] += 1;
        }
      });
    });
    let foundClaim;
    claims.forEach((claim) => {
      let foundOverlap = false;
      this.getInches(claim).forEach((inch) => {
        const key = `${inch[0]},${inch[1]}`;
        if (visitedSquares[key] > 1) {
          foundOverlap = true;
        }
      });
      if (!foundOverlap) {
        foundClaim = claim;
      }
    });

    return parseInt(foundClaim.match(/(\d+)/)[1], 10);
  }
}

export default Day03;
