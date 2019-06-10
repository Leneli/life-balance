import Wheel from '../../../vendor/class/wheel'

export default function createWheel (state) {
  state.wheel = new Wheel()
  state.currentWheelId = state.wheel.id
}
