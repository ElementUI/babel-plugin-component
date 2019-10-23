import { MessageBox } from 'element-ui'

export function alert(text) {
  MessageBox.alert(text)
}

export function confirm(text) {
  return MessageBox.confirm(text)
}

console.log(MessageBox)
