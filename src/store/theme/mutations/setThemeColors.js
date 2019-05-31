export default function setThemeColors (state, payload) {
  if (payload instanceof Object && Object.keys(payload).length > 0) {
    state.theme = {
      name: 'User custom theme',
      colors: payload
    }
  }
}
