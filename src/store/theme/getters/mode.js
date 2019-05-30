import { DARK_MODE, LIGHT_MODE } from '../state/mode'

export const getModeName = state => state.mode
export const getDarkMode = state => state.mode === DARK_MODE
export const getLightMode = state => state.mode === LIGHT_MODE
