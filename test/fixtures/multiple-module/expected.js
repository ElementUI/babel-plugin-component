"use strict";

require("antd/lib/alert2/style.css");

var _alert = _interopRequireDefault(require("antd/lib/alert2"));

require("test-module/lib/alert/style.css");

var _alert2 = _interopRequireDefault(require("test-module/lib/alert"));

require("antd/lib/button/style.css");

var _button = _interopRequireDefault(require("antd/lib/button"));

require("antd/lib/message/style.css");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _message2["default"])('xxx');
ReactDOM.render(React.createElement("div", null, React.createElement(_button["default"], null, "xxxx"), React.createElement(_alert2["default"], null, "xxxx"), React.createElement(_alert["default"], null, "xxx")));