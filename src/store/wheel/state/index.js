import { wheel } from './wheel'

export const state = {
  wheel,

  /**
   * number of sections in Wheel
   */
  minNumberOfSectors: 4,
  maxNumberOfSectors: 12,
  standartNumberOfSectors: 8,

  /**
   * scale from - to
   */
  startScaleValue: 0,
  finishScaleValue: 10
}
