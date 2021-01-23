import { initMessages } from './messages'
import { initPlayer } from './player'
import { initStorage } from './storage'

const player = document.querySelector('video')

initStorage().then(settings => {
  initMessages(player)
  initPlayer(player, settings)
})
