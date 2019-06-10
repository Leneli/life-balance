import Wheel from '../../../vendor/class/wheel'

export const getAllSectors = state => state.wheel instanceof Wheel ? state.wheel.sectors : {}

export const getSector = state => ({ id, key }) => {
  if (state.wheel instanceof Wheel) {
    let sector = state.wheel.getSector(id)

    if (!sector) return null

    return key ? sector[key] : sector
  } else {
    return null
  }
}
