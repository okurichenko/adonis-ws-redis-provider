const { ServiceProvider } = require('@adonisjs/fold')
const ChannelManager = require('@adonisjs/websocket/src/Channel/Manager')

class WsRedisProvider extends ServiceProvider {
  boot() {
    const Ws = use('Ws')
    const Redis = use('Redis')

    Ws.publish = function({ topic, event, payload }) {
      Redis.publish('ws', JSON.stringify({ topic, event, payload }))
    }

    Redis.subscribe('ws', (data) => {
      const { topic, event, payload } = JSON.parse(data)
      const t = ChannelManager.resolve(topic).topic(topic)
      if (!t) return
      t.broadcast(event, payload)
    })
  }
}

module.exports = WsRedisProvider
