import Wheel from '../../../vendor/class/wheel'

export default function updateSector (state, payload) {
  if (state.wheel instanceof Wheel) state.wheel.updateSector(payload)
}
