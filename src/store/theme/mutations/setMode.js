import { DARK_MODE, LIGHT_MODE } from '../state/mode'

// TODO: save mode in LocalStorage
export default function setMode (state, mode) {
  if (!mode) {
    state.mode === DARK_MODE ? state.mode = LIGHT_MODE : state.mode = DARK_MODE
  } else if (mode === DARK_MODE || mode === LIGHT_MODE) {
    state.mode = mode
  }
}
