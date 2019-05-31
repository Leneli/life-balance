import { read } from "../../../vendor/storage";
import { THEME_MODE } from "../../../vendor/storage/types";

export const DARK_MODE = 'dark'
export const LIGHT_MODE = 'light'
export const DEFAULT_MODE = read(THEME_MODE) || LIGHT_MODE
