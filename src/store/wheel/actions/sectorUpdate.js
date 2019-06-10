export function updateSectorName (context, { id, prop }) {
  context.commit('updateSector', {
    id,
    name: prop
  })
}

export function updateSectorValue (context, { id, prop }) {
  context.commit('updateSector', {
    id,
    value: prop
  })
}

export function updateSectorDescription (context, { id, prop }) {
  context.commit('updateSector', {
    id,
    description: prop
  })
}
