const template = message => `[ytr+] ${message}`

const info = message => console.info(template(message))
const warn = message => console.warn(template(message))
const error = message => console.error(template(message))

export default {
  info,
  warn,
  error
}
