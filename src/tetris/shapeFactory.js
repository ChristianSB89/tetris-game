const SHAPES = [
  {
    shape: [
      //square, rotate set to false because it is a square :P
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ],
    width: 2,
    height: 2,
    rotate: false,
  },
  {
    shape: [
      //straight piece
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    width: 1,
    height: 4,
  },
  {
    shape: [
      // L-shaped piece
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    width: 1,
    height: 3,
  },
  {
    shape: [
      // L-shaped piece, mirrored
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
    ],
    width: 3,
    height: 1,
  },
];

export function randomShape() {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}
