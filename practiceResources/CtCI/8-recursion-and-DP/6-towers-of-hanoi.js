/* eslint-disable no-extend-native, func-names */
Array.prototype.last = function () {
  return this.length ? this.slice(-1)[0] : Infinity;
};

const hanoi = (disks) => {
  const towers = [disks, [], []];

  const solve = (src, dest, n, buffer) => {
    if (n === 1 && (src.last() < dest.last())) {
      const disk = src.pop();
      return dest.push(disk);
    } else if (n === 2) {
      if (src.last() < buffer.last()) buffer.push(src.pop());
      if (src.last() < dest.last()) dest.push(src.pop());
      if (buffer.last() < dest.last()) dest.push(buffer.pop());

      return;
    }

    solve(src, buffer, n - 1, dest);
    const disk = src.pop();
    dest.push(disk);
    solve(buffer, dest, n - 1, src);
  };

  solve(towers[0], towers[2], disks.length, towers[1]);

  return towers;
};


// Class based solution
class Tower {
  constructor(disks) {
    this.disks = disks || [];
  }

  moveTopTo(dest) {
    if (this.disks.length && this.disks.last() < dest.disks.last()) {
      dest.disks.push(this.disks.pop());
    }
  }

  moveStack(dest, buffer, n) {
    if (n === 1) {
      this.moveTopTo(dest);
    } else if (n === 2) {
      this.moveTopTo(buffer);
      this.moveTopTo(dest);
      buffer.moveTopTo(dest);
    } else {
      this.moveStack(buffer, dest, n - 1);
      this.moveTopTo(dest);
      buffer.moveStack(dest, this, n - 1);
    }
  }
}

const hanoiSolver = (disks) => {
  const towers = [];
  for (let i = 0; i < 3; i++) {
    const tower = i === 0 ? new Tower(disks) : new Tower();
    towers[i] = tower;
  }

  towers[0].moveStack(towers[2], towers[1], disks.length);
  return towers;
};
