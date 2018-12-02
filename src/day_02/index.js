class Day02 {
  static count2(id) {
    return this.checkForCount(2)(id);
  }

  static count3(id) {
    return this.checkForCount(3)(id);
  }

  static checksum(data) {
    const ids = data.split(', ');
    let num2 = 0;
    let num3 = 0;
    ids.forEach((id) => {
      if (this.count2(id)) {
        num2 += 1;
      }
      if (this.count3(id)) {
        num3 += 1;
      }
    });

    return num2 * num3;
  }

  static checkForCount(count) {
    return function check(id) {
      const chars = {};
      id.split('').forEach((c) => {
        if (chars[c] === undefined) {
          chars[c] = 1;
        } else {
          chars[c] += 1;
        }
      });
      return Object.values(chars).includes(count);
    };
  }

  static oneOff(id1, id2) {
    let foundOne = false;

    for (let i = 0; i < id1.length; i += 1) {
      if (id1[i] !== id2[i]) {
        if (foundOne) {
          return false;
        }
        foundOne = true;
      }
    }

    return foundOne;
  }

  static findId(data) {
    const ids = data.split(', ');
    let foundId;
    ids.forEach((id1) => {
      ids.forEach((id2) => {
        if (this.oneOff(id1, id2)) {
          foundId = this.getId(id1, id2);
        }
      });
    });

    return foundId;
  }

  static getId(id1, id2) {
    let id = '';
    for (let i = 0; i < id1.length; i += 1) {
      if (id1[i] === id2[i]) {
        id += id1[i];
      }
    }

    return id;
  }
}

export default Day02;
