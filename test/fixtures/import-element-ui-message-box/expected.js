"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alert = alert;
exports.confirm = confirm;

var _messageBox = _interopRequireDefault(require("element-ui/lib/theme-default/message-box.css"));

require("element-ui/lib/theme-default/base.css");

var _messageBox2 = _interopRequireDefault(require("element-ui/lib/message-box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function alert(text) {
  _messageBox2.default.alert(text);
}

function confirm(text) {
  return _messageBox2.default.confirm(text);
}

console.log(_messageBox2.default);
