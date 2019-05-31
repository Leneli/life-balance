import { read } from '../../../vendor/storage'
import { WHEEL_DATA } from '../../../vendor/storage/types'

/**
 * BALANCE WHEEL
 *
 * null by default - no wheel
 *
 * @Object if wheel was created
 * key = sector id
 *    name  - sector name, @String
 *    value - sector value, @Number from min to max in scale
 *    description - sector description, @String
 */

let defaultWheel = read(WHEEL_DATA)

try {
  if (typeof defaultWheel === 'string') defaultWheel = JSON.parse(defaultWheel)
} catch (error) {
  console.warn('Store, wheel: invalid Wheel data in local storage ', error)
}

export var wheel = defaultWheel || null
