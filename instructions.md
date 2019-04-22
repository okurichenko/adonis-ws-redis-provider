# Register provider

The provider must be registered inside `start/app.js` file.

```js
const providers = [
  'adonis-ws-redis-provider/providers/WsRedisProvider',
]
```

## Subscription preload

The next step is to open `server.js` and register preloader for redis subscriptions.

```js
new Ignitor(Fold)
  .appRoot(__dirname)
  .preLoad('start/wsRedis') // <-- add this line
  .wsServer()
  .fireHttpServer()
  .catch(console.error)
```
