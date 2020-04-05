import React from "react";
import Konva from "konva";
import { Layer } from "react-konva";

import withMap from 'components/hocs/withMap';

import Cell from "components/atoms/Cell";

function GroundLayer({ map, ...props }) {
  return (
    <Layer
      {...props}
    >
      {map.map((column, indexY) =>
        column.map((cell, indexX) => (
          <Cell
            x={indexX}
            y={indexY}
            stroke="#49FF61"
          />
        ))
      )}
    </Layer>
  )
}

export default withMap(GroundLayer);