
// Todo: Couldn't solve

// class Box {
//   constructor(w, h, d) {
//     this.w = w;
//     this.h = h;
//     this.d = d;
//   }
// }

// const getTallestStack = (allBoxes) => {
//   let lastBox;
//   const boxes = allBoxes.map(dimensions => new Box(...dimensions))
//     .sort((a, b) => a.w - b.w);

//   const placementIsValid = (top, bottom) => (top.w > bottom.w && top.h > bottom.h && top.d > bottom.d);

//   const stackBoxes = (n, height) => {
//     if (n === 0) {
//       [lastBox] = boxes;
//       return lastBox.h;
//     }
//   };
// };
