export default function switchTheme (context, payload) {
  if (typeof payload === 'string') context.commit('setThemeByName', payload)
  else if (payload instanceof Object) context.commit('setThemeColors', payload)
}
