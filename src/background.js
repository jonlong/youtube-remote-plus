let portFromCS

browser.runtime.onConnect.addListener(p => {
  portFromCS = p
  portFromCS.postMessage({ info: '`runtime.Port` connected' })
})

browser.commands.onCommand.addListener(command => {
  portFromCS.postMessage({ command: command })
})
