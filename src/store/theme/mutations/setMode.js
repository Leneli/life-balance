import { DARK_MODE, LIGHT_MODE } from '../state/mode'
import { save } from '../../../vendor/storage';
import { THEME_MODE } from '../../../vendor/storage/types';

export default function setMode (state, mode) {
  if (!mode) {
    state.mode === DARK_MODE ? state.mode = LIGHT_MODE : state.mode = DARK_MODE
  } else if (mode === DARK_MODE || mode === LIGHT_MODE) {
    state.mode = mode
  }

  save(THEME_MODE, state.mode)
}
