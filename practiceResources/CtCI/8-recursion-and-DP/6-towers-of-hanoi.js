/* eslint-disable no-extend-native, func-names */

const hanoi = (disks) => {
  Array.prototype.last = function () {
    return this.length ? this.slice(-1)[0] : Infinity;
  };
  const towers = [disks, [], []];

  const solve = (src, dest, n, buffer) => {
    console.log(towers);
    if (n === 1 && (src.last() < dest.last())) {
      const disk = src.pop();
      return dest.push(disk);
    } else if (n === 2) {
      if (src.last() < buffer.last()) {
        buffer.push(src.pop());
      }
      if (src.last() < dest.last()) {
        dest.push(src.pop());
      }
      if (buffer.last() < dest.last()) {
        dest.push(buffer.pop());
      }
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


// Solution without size checks
// const hanoi = (disks) => {
//   const towers = [disks, [], []];

//   const solve = (src, dest, n, buffer) => {
//     if (n === 1) {
//       const disk = src.pop();
//       return dest.push(disk);
//     } else if (n === 2) {
//       const small = src.pop();
//       const big = src.pop();
//       dest.push(big);
//       return dest.push(small);
//     }

//     solve(src, buffer, n - 1, dest);
//     const disk = src.pop();
//     dest.push(disk);
//     solve(buffer, dest, n - 1, src);
//   };

//   solve(towers[0], towers[2], disks.length, towers[1]);

//   return towers;
// };
