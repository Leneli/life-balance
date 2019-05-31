export default function createWheel (state) {
  state.wheel = {}

  for (let i = 0; i < state.minNumberOfSectors; i++) {
    state.wheel[i] = {
      name: null,
      value: 0,
      description: null
    }
  }
}