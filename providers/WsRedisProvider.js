const { ServiceProvider } = require('@adonisjs/fold')

class WsRedisProvider extends ServiceProvider {
  boot() {
    const Ws = use('Ws')
    const Redis = use('Redis')

    Ws.publish = function({ topic, event, payload }) {
      Redis.publish('ws', JSON.stringify({ topic, event, payload }))
    }
  }
}

module.exports = WsRedisProvider
