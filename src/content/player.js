import logger from './logger'
import {
  storeId,
  storeA,
  storeB,
  storeSpeed,
  clearStoredLoop,
  defaults
} from './storage'

const seekRates = [5, 10, 15]
let seekRateIndex = 0
let seekRate = seekRates[seekRateIndex]
let markerA
let markerB
let lastMarkerSet
let speed

const handleLoop = video => {
  const time = video.currentTime

  if (markerA && markerB && markerB >= markerA) {
    if (time > markerB) {
      video.currentTime = markerA
    }
  }
}

const setA = video => {
  const time = video.currentTime
  lastMarkerSet = 'A'
  markerA = time

  storeA(time)
  logger.info(`marker A set: ${time}`)
}

const setB = video => {
  const time = video.currentTime
  lastMarkerSet = 'B'
  markerB = time

  storeB(time)
  logger.info(`marker B set: ${time}`)
}

const setMarker = video => (lastMarkerSet === 'A' ? setB(video) : setA(video))

const togglePlayPause = video => (!video.paused ? video.pause() : video.play())

const clearLoop = () => {
  markerA = defaults.aTime
  markerB = defaults.bTime

  clearStoredLoop()
  logger.info(`markers cleared`)
}

const speedUp = video => {
  speed += 0.2
  speed = Math.min(speed, 5)
  video.playbackRate = speed

  storeSpeed(speed)
  logger.info(`speed increased: ${speed}`)
}

const speedDown = video => {
  speed -= 0.2
  speed = Math.max(speed, 0.2)
  video.playbackRate = speed

  storeSpeed(speed)
  logger.info(`speed decreased: ${speed}`)
}

const resetSpeed = video => {
  speed = 1.0
  video.playbackRate = speed

  storeSpeed(speed)
  logger.info(`speed reset: ${speed}`)
}

const seekFwd = video => {
  const time = video.currentTime + seekRate

  if (time > markerB) {
    clearLoop()
  }

  video.currentTime = time
}

const seekBack = video => {
  const time = video.currentTime - seekRate

  video.currentTime = time
}

const toggleSeekRate = () => {
  seekRateIndex++
  seekRateIndex = seekRateIndex % seekRates.length
  seekRate = seekRates[seekRateIndex]

  logger.info(`seek rate set: ${seekRate} seconds`)
}

export const initPlayer = (video, settings) => {
  markerA = settings.aTime
  markerB = settings.bTime
  speed = 1.0

  video.addEventListener('timeupdate', () => handleLoop(video))
}

export default {
  setA,
  setB,
  setMarker,
  togglePlayPause,
  clearLoop,
  speedUp,
  speedDown,
  resetSpeed,
  seekFwd,
  seekBack,
  toggleSeekRate
}
