/**
 * Config source: https://git.io/JeYHp
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import { SessionConfig } from '@ioc:Adonis/Addons/Session'

const sessionConfig: SessionConfig = {
  enabled: true,
  driver: Env.get('SESSION_DRIVER'),
  cookieName: 'adonis-session',
  clearWithBrowser: false,
  age: '0.5 hrs',
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: false,
  },
  file: {
    location: Application.tmpPath('sessions'),
  },
  redisConnection: 'local',
}

export default sessionConfig
