import React, { Fragment, useState, useEffect } from 'react';
import Konva from "konva";

import {
  Stage,
  Layer,
  Line,
  Arc,
  Text,
} from "react-konva";

import { radius } from "../../../config";

class Tags extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sale: 0.5,
    }
  }

  renderArcs() {
    const { sale } = this.state;

    const renderArc = (x, y, radius, rotation) => {
      return (
        <Fragment>
          <Text
            x={x}
            y={y}
            text={`${x} ${y} ${rotation}`}
            fontSize={30}
            fontFamily={'Calibri'}
            fill={'green'}
          />
          <Arc
            x={x}
            y={y}
            outerRadius={radius}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={rotation}
          />
        </Fragment>
      )
    }

    let startAngle = 0;

    /*
    [0, 1024, 512, -90],
            [0, 1024, 1024, -90],

            [1024, 1024, 512, -180],
            [1024, 1024, 1024, -180],

            [1024, 0, 512, 90],
            [1024, 0, 1024, 90],

            [0, 0, 512, 0],
            [0, 0, 1024, 0],
     */

    return (
      <Layer
        scaleX={sale}
        scaleY={sale}
        draggable
      >
        {[[null, null], [null, null]].map(
          (item, indexY) => item
            .map((item, indexX) => {
              const arc = renderArc(indexX * 1024, indexY * 1024, 512, startAngle * (indexY === 1 ? -1 : 1));
              startAngle += 90;
              return arc;
            }))
        }
      </Layer>
    )


    return (
      <Fragment>
        <Layer
          scaleX={sale}
          scaleY={sale}
        >

          <Arc
            x={10}
            y={1024 + 128}
            outerRadius={512}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={-90}
          />
          <Arc
            x={10}
            y={1024 + 128}
            outerRadius={1024}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={-90}
          />
        </Layer>
        <Layer
          scaleX={sale}
          scaleY={sale}
        >
          <Arc
            x={10 + 1024}
            y={1024 + 128}
            outerRadius={512}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={-180}
          />
          <Arc
            x={10 + 1024}
            y={1024 + 128}
            outerRadius={1024}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={-180}
          />
        </Layer>
        <Layer
          scaleX={sale}
          scaleY={sale}
        >
          <Arc
            x={10 + 1024}
            y={128}
            outerRadius={512}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={90}
          />
          <Arc
            x={10 + 1024}
            y={128}
            outerRadius={1024}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            rotation={90}
          />
        </Layer>
        <Layer
          scaleX={sale}
          scaleY={sale}
        >
          <Arc
            x={10}
            y={128}
            outerRadius={512}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            // rotation={90}
          />
          <Arc
            x={10}
            y={128}
            outerRadius={1024}
            strokeWidth={2}
            stroke={'black'}
            angle={90}
            // rotation={90}
          />
        </Layer>
      </Fragment>
    )
  }

  render() {
    const { sale } = this.state;

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer
          scaleX={sale}
          scaleY={sale}
        >
          <Line
            x={10}
            y={1024 + 128}
            points={[0, 0, 1024, 0]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, 0, 0, -1024]}
            stroke="black"
            tension={1}
          />
        </Layer>
        {this.renderArcs()}
        <Layer
          visible={false}
          scaleX={sale}
          scaleY={sale}
        >
          <Line
            x={10}
            y={1024 + 128}
            points={[0, 0, 1024, -1024]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, 0, 1024, -1024 / 2]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, 0, 1024 / 2, -1024]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[1024, -1024, 0, -1024 / 2]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[1024, -1024, 1024 / 2, 0]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, -1024, 1024, 0]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, -1024, 1024 / 2, 0]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[0, -1024, 1024, -1024 / 2]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[1024, 0, 0, -1024 / 2]}
            stroke="black"
            tension={1}
          />
          <Line
            x={10}
            y={1024 + 128}
            points={[1024, 0, 1024 / 2, -1024]}
            stroke="black"
            tension={1}
          />
        </Layer>
      </Stage>
    )
  }
}

export default Tags;