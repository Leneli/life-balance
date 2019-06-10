import { wheel, currentWheelId } from './wheel'
import * as constants from './constants'

export const state = {
  wheel,
  currentWheelId,

  /**
   * number of sections in Wheel
   */
  minNumberOfSectors: constants.MIN_NUMBER_OF_SECTORS,
  maxNumberOfSectors: constants.MAX_NUMBER_OF_SECTORS,
  defNumberOfSectors: constants.DEF_NUMBER_OF_SECTORS,

  /**
   * scale from - to
   */
  startScaleValue: constants.START_SCALE_VALUE,
  finishScaleValue: constants.FINISH_SCALE_VALUE
}
