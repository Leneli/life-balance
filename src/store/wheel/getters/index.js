export const getters = {
  getWheel: state => state.wheel,

  /**
   * number of sections in Wheel
   */
  getMinNumberOfSectors: state => state.minNumberOfSectors,
  getMaxNumberOfSectors: state => state.maxNumberOfSectors,
  getStandartNumberOfSectors: state => state.standartNumberOfSectors,

  /**
   * scale from - to
   */
  getStartScaleValue: state => state.startScaleValue,
  getFinishScaleValue: state => state.finishScaleValue,
}
