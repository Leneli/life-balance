import { getSector, getAllSectors } from './sector'

export const getters = {
  getWheel: state => state.wheel,
  getWheelId: state => state.currentWheelId,

  /**
   * number of sectors in Wheel
   */
  getMinNumberOfSectors: state => state.minNumberOfSectors,
  getMaxNumberOfSectors: state => state.maxNumberOfSectors,
  getDefNumberOfSectors: state => state.defNumberOfSectors,

  /**
   * scale from - to
   */
  getStartScaleValue: state => state.startScaleValue,
  getFinishScaleValue: state => state.finishScaleValue,

  /**
   * sector
   */
  getSector,
  getAllSectors
}
