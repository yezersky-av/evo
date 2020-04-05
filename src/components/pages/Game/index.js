import React from 'react';
import Konva from "konva";
import {
  Stage,
  Layer,
} from "react-konva";

import withMap from 'components/hocs/withMap';

import GroundLayer from './GroundLayer';

class Game extends React.Component {
  render() {
    const { map } = this.props;

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <GroundLayer map={map} />
      </Stage>
    )
  }
}

export default withMap(Game);