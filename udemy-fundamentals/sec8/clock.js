const EventEmitter = require('events')
const Clock = class extends EventEmitter {
  constructor() {
    super()
    this.interval = 2000
    this.timer = null
  }

  start() {
    if (this.timer) {
      this.stop()
    }
    this.timer = global.setInterval(() => {
      this.emit('tick')
    }, this.interval)
  }
  stop() {
    if(!this.timer) {
      return
    }
    global.clearInterval(this.timer)
  }
}
module.exports = Clock
