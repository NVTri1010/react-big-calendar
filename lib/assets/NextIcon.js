'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var React = _interopRequireWildcard(require('react'))

function NextIcon(props) {
  return React.createElement(
    'svg',
    (0, _extends2.default)(
      {
        width: 9,
        height: 16,
        viewBox: '0 0 9 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      props
    ),
    React.createElement('path', {
      d:
        'M.849.875C.914.81.979.778 1.108.778c.097 0 .194.032.29.097l6.763 6.791c.065.065.13.162.13.26 0 .128-.065.193-.13.258L1.4 14.975a.522.522 0 01-.291.097c-.13 0-.194-.032-.26-.097l-.646-.646c-.097-.065-.13-.13-.13-.26 0-.096.033-.193.13-.29l5.856-5.854L.202 2.072c-.097-.065-.13-.162-.13-.292 0-.097.033-.194.13-.258L.849.875z',
      fill: '#000',
    })
  )
}

var _default = NextIcon
exports.default = _default
module.exports = exports['default']
