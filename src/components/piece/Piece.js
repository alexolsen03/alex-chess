import React from 'react';
import bB from './../../static/bB.png';
import bK from './../../static/bK.png';
import bN from './../../static/bN.png';
import bP from './../../static/bP.png';
import bQ from './../../static/bQ.png';
import bR from './../../static/bR.png';

import wB from './../../static/wB.png';
import wK from './../../static/wK.png';
import wN from './../../static/wN.png';
import wP from './../../static/wP.png';
import wQ from './../../static/wQ.png';
import wR from './../../static/wR.png';

const PIECES = {
  "bK": bK,
  "bQ": bQ,
  "bN": bN,
  "bB": bB,
  "bP": bP,
  "bR": bR,

  "wK": wK,
  "wQ": wQ,
  "wN": wN,
  "wB": wB,
  "wP": wP,
  "wR": wR,
}

const Piece = ({piece}) => (
  <img src={PIECES[piece]} />
);

export default Piece;
