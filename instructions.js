'use strict'

/**
 * adonis-websocket
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
const path = require('path')

async function copyWsRedisFile (cli) {
  const inFile = path.join(__dirname, 'config', 'wsRedis.js')
  const outFile = path.join(cli.helpers.appRoot(), 'start/wsRedis.js')
  await cli.copy(inFile, outFile)
  cli.command.completed('create', 'start/wsRedis.js')
}

module.exports = async (cli) => {
  try {
    await copyWsRedisFile(cli)
  } catch (error) {
    // ignore error
  }
}
