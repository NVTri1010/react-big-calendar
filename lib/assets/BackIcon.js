'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var React = _interopRequireWildcard(require('react'))

function BackIcon(props) {
  return React.createElement(
    'svg',
    (0, _extends2.default)(
      {
        width: 9,
        height: 14,
        viewBox: '0 0 9 14',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      props
    ),
    React.createElement('path', {
      d:
        'M7.502 13.88c-.06.06-.12.09-.24.09-.09 0-.181-.03-.271-.09L.71 7.575c-.06-.06-.12-.15-.12-.24 0-.12.06-.18.12-.24L6.992.788c.09-.06.18-.09.27-.09.12 0 .18.03.24.09l.601.6c.09.06.12.12.12.24 0 .09-.03.18-.12.27L2.664 7.335l5.438 5.436c.09.06.12.15.12.27 0 .09-.03.18-.12.24l-.6.6z',
      fill: '#000',
    })
  )
}

var _default = BackIcon
exports.default = _default
module.exports = exports['default']
