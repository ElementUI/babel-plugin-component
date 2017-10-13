'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myBu = require('antd/lib/my-bu');

var _myBu2 = _interopRequireDefault(_myBu);

var _button = require('element-ui/lib/theme-default/button.css');

var _button2 = _interopRequireDefault(_button);

var _base = require('element-ui/lib/theme-default/base.css');

var _base2 = _interopRequireDefault(_base);

var _button3 = require('element-ui/lib/button');

var _button4 = _interopRequireDefault(_button3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_button4.default);

var Bt2 = _myBu2.default;

var LeftBar = {
    data: function data() {
        return {
            firstName: 'Wfghjfghjghjalter11',
            lastName: 'ghjkhbnhWhitesdfghjkdfghjkl;',
            alias: 'jkhkhhlkhHeisenberg'
        };
    },
    render: function render() {
        var h = arguments[0];

        console.log(_button4.default);
        var Bt = _myBu2.default;
        return h(
            'div',
            null,
            [h(
                'div',
                null,
                [' ', this.firstName, ' ']
            ), h(
                _myBu2.default,
                null,
                ['ClickMe']
            )]
        );
    }
};
exports.default = LeftBar;