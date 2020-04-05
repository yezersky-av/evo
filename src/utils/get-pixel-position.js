import { radius, shiftCoof } from "config";

export default function getPixelPosition(indexX, indexY) {
  let x = (indexX * ((radius * 2) * shiftCoof));
  let y = (indexY * (radius * 2));

  if (indexY % 2 !== 0) {
    x += radius * shiftCoof;
  }
  y -= indexY * ((radius / 2) - 1);

  return { x, y };
}