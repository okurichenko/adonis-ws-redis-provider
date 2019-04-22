'use strict'

/*
|--------------------------------------------------------------------------
| WsRedis Subscriber
|--------------------------------------------------------------------------
*/

const Redis = use('Redis')
const ChannelManager = require('@adonisjs/websocket/src/Channel/Manager')

Redis.subscribe('ws', (data) => {
  const { topic, event, payload } = JSON.parse(data)
  const ch = ChannelManager.resolve(topic)
  const t = ch.topic(topic)
  if (!t) return
  t.broadcast(event, payload)
})
