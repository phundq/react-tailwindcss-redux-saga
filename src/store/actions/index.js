import lodash from 'lodash'
import ACTION_BASE_TYPES from './types'

const TYPES = lodash.reduce(
  ACTION_BASE_TYPES,
  (map, value) => {
    map[value] = value
    map[`${value}_REQUEST`] = `${value}_REQUEST`
    map[`${value}_SUCCESS`] = `${value}_SUCCESS`
    map[`${value}_FAIL`] = `${value}_FAIL`

    return map
  },
  {}
)

const actions = lodash.reduce(
  ACTION_BASE_TYPES,
  (map, value) => {
    map[lodash.camelCase(value)] = (data, callback) => ({
      type: value,
      data,
      callback
    })

    return map
  },
  {}
)

export { TYPES, actions }

export default actions
