# Adonis Websockets Redis Provider

This project provides listener and publisher for Redis PubSub in terms of adonis-websocket.

## Installation

Install addon via:
```bash
adonis install adonis-ws-redis-provider
```

Add provider to `start/app.js`:

```js
const providers = [
  'adonis-ws-redis-provider/providers/WsRedisProvider',
]
```

The next step is to open `server.js` and register preloader for redis subscriptions.

```js
new Ignitor(Fold)
  .appRoot(__dirname)
  .preLoad('start/redis')
  .wsServer() // <-- add this line
  .fireHttpServer()
  .catch(console.error)
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
