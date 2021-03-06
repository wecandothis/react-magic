'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var perspectiveRotateX = (0, _utils.compose)(_utils.perspective, _utils.rotateX);


var perspectiveDownReturn = {
  '0%': {
    transformOrigin: '0 100%',
    transform: perspectiveRotateX(['800px'], [-180])
  },
  '100%': {
    transformOrigin: '0 100%',
    transform: perspectiveRotateX(['800px'], [0])
  }
};

exports.default = perspectiveDownReturn;