import logger from './logger'

// Youtube's `currentTime` values are calculated to the millionth,
// and this converts the value to an integer for local storage
const createTimestamp = time => time.toFixed(6) * 1000000
const convertTimeToSeconds = timestamp => timestamp / 1000000

// Youtube's `playbackSpeed` values are calculated to the tenth,
// and this converts the value to an integer for local storage
const createSpeed = speed => speed.toFixed(1) * 10
const convertSpeedToDecimal = speed => speed / 10

export const defaults = {
  id: null,
  aTime: null,
  bTime: null,
  speed: createSpeed(1.0)
}
const setKey = obj => browser.storage.local.set(obj)
const getStoredSettings = browser.storage.local.get()

export const storeId = id => setKey({ id })
export const storeA = time => setKey({ aTime: createTimestamp(time) })
export const storeB = time => setKey({ bTime: createTimestamp(time) })
export const storeSpeed = speed => setKey({ speed: createSpeed(speed) })
export const clearStoredLoop = () => setKey({ aTime: null, bTime: null })

export const initStorage = () =>
  new Promise(resolve => {
    getStoredSettings.then(
      // Success
      storedSettings => {
        if (!storedSettings) {
          browser.storage.local.set(defaults)
          logger.info('no settings detected')
          resolve(defaults)
        } else {
          resolve({
            aTime: convertTimeToSeconds(storedSettings.aTime),
            bTime: convertTimeToSeconds(storedSettings.bTime),
            speed: convertSpeedToDecimal(storedSettings.speed),
            ...storedSettings
          })
        }
      },
      // Error
      error => logger.error(error)
    )
  })
