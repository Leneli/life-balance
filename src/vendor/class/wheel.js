import * as constants from '../../store/wheel/state/constants'
import { WHEEL_DATA } from '../storage/types'
import { save } from '../storage'

export default class Wheel {
  constructor (options = {}) {
    this.id = options.id || `wheel-${Date.now()}`
    this.sectors = options.sectors || {}
    this.date_create = options.date_create || new Date()
    this.date_update = options.date_update || new Date()

    this.setDescription(options.description)

    if (Object.keys(this.sectors).length === 0) {
      for (let i = 0; i < constants.DEF_NUMBER_OF_SECTORS; i++) {
        this.addSector({ id: i })
      }
    }

    if (!options || !options.id) this.save()
  }

  /**
   * refresh date_update
   */
  timeUpdate () {
    this.date_update = new Date()
  }

  /**
   * save Wheel to LocalStorage
   */
  save () {
    return Promise.resolve(() => {
      this.timeUpdate()
    })
      .then(() => save(WHEEL_DATA, this))
  }

  /**
   * set description for Wheel
   * @param {String} string - description text, optional
   */
  setDescription (string) {
    var max = 250

    this.description = typeof string === 'string'
      ? string.length <= max
        ? string
        : string.slice(0, max) + '...'
      : null
  }

  /**
   * add new sector in Wheel
   * @param {Number} id - id of sector [0, 1, 2...], required
   * @param {String} name - name of sector, required
   * @param {Number} value - current value of sector, required, default 0
   * @param {String} description - description of sector, optional
   *
   * TODO: для секторов (пока просто `console.warn(err)`)
   * - предусмотреть разные обработчики ошибок для разных ситуаций
   * - выводить сообщение об ошибке для пользователя, если необходимо
   * - сообщение об ошибке добавить с неитерируемое свойство для this.sectors
   */
  addSector ({ id, name, value = 0, description = null } = {}) {
    var defaultNames = {
      0: 'Здоровье',
      1: 'Карьера',
      2: 'Финансы',
      3: 'Семья',
      4: 'Друзья',
      5: 'Отдых',
      6: 'Хобби',
      7: 'Саморазвитие'
    }

    return new Promise((resolve, reject) => {
      if (isNaN(id)) reject('Некорректный ID: ' + id)
      if (this.sectors.hasOwnProperty(id)) reject('Сектор с таким ID уже существует: ' + id)
      if (Object.keys(this.sectors).length >= constants.MAX_NUMBER_OF_SECTORS) reject('Нельзя создать больше секторов, максимальное количество ' + constants.MAX_NUMBER_OF_SECTORS)

      resolve()
    })
      .then(() => {
        this.sectors[id] = {
          name: name || defaultNames[id] || 'Темная зона',
          value,
          description
        }
      })
      .then(() => this.save())
      .catch(err => console.warn(err))
  }

  /**
   * add new sector in Wheel
   * @param {Number} id - id of sector [0, 1, 2...], required
   * @param {String} name - name of sector, optional
   * @param {Number} value - current value of sector, optional
   * @param {String} description - description of sector, optional
   */
  updateSector ({ id, name, value, description } = {}) {
    return new Promise((resolve, reject) => {
      if (!id || isNaN(id) || id < 0) reject('Некоректное значение ID: ' + id)
      if (!this.sectors.hasOwnProperty(id)) reject('Сектора с таким ID не существует: ' + id)

      resolve()
    })
      .then(() => {
        if (name !== undefined) this.sectors[id].name = name
      })
      .then(() => {
        if (!isNaN(value)) {
          value = +value

          if (value < constants.START_SCALE_VALUE) value = constants.START_SCALE_VALUE
          else if (value > constants.FINISH_SCALE_VALUE) value = constants.FINISH_SCALE_VALUE

          this.sectors[id].value = value
        }
      })
      .then(() => {
        if (description !== undefined) this.sectors[id].description = description
      })
      .then(() => this.save())
      .catch(err => console.warn(err))
  }

  getSector (id) {
    if (id) return this.sectors[id]
    else {
      console.warn('Не указан ID сектора')

      return null
    }
  }
}
