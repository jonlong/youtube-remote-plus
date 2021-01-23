import player from './player'
import logger from './logger'

export const initMessages = video => {
  const port = browser.runtime.connect({ name: 'youtube-remoteplus-port' })

  port.onMessage.addListener(message => {
    const info = message.info
    const command = message.command

    if (info) {
      logger.info(info)
    }

    if (command) {
      player[command](video)
    }
  })
}
