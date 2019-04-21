# Adonis Websockets Redis Provider

This project provides listener and publisher for Redis PubSub in terms of adonis-websocket.

## Installation

Add provider to `start/app.js`:

```js
const providers = [
  'adonis-ws-redis-provider/providers/WsRedisProvider',
]
```

Don't forget that this package relies on [adonis-websocket](https://github.com/adonisjs/adonis-websocket) and [adonis-redis](https://github.com/adonisjs/adonis-redis).

## How to use

Instead of

```js
Ws
  .getChannel('channel')
  .topic('topic')
  .broadcast(event, data)
```

just publish message like below:

```js
Ws.publish({
  topic: 'topic',
  event: 'event',
  payload: data,
})
```
