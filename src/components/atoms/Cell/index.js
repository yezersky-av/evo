import React, { useState } from "react";
import Konva from "konva";
import { RegularPolygon } from "react-konva";

import { radius, shiftCoof } from "config";

import getPixelPosition from "utils/get-pixel-position";

const Index = ({ x: indexX, y: indexY, ...props }) => {
  // const [filled, setFilled] = useState(false);
  //
  // const [fillColor] = useState('#000000');
  // const [strokeColor] = useState(Konva.Util.getRandomColor());

  const { x, y } = getPixelPosition(indexX, indexY);

  return (
    <RegularPolygon
      x={x}
      y={y}
      sides={6}
      radius={radius}
      // fill={filled && fillColor}
      // fill={fillColor}
      // stroke={strokeColor}
      strokeWidth={1}
      {...props}
      // onClick={() => setFilled(!filled)}
    />
  )
}

export default Index;