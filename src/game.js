import emoji from "./emoji.js";
import { unsort } from "array-unsort";

export function create_board(xsize, ysize) {
  let size = xsize*ysize/2
  let e = unsort(emoji).slice(0, size);
  let tiles = unsort([...e, ...e]);
  return tiles.map(tile => ({tile, state: "hidden" }))
}

export function is_won(game) {
  return game.every(({state}) => state === "known")
}
