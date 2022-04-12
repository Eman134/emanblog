// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ ally }) {
    return ally.use('discord').redirect()
  }
  public async logout({ response, session }) {
    session.forget('user')
    return response.redirect('/')
  }
  public async callback({ ally, response, session }) {
    const discord = ally.use('discord')

    if (discord.accessDenied()) {
      return response.redirect('/')
    }

    if (discord.stateMisMatch()) {
      return response.redirect('/')
    }

    if (discord.hasError()) {
      return discord.getError()
    }

    const user = await discord.user()

    session.put('user', user)

    return response.redirect().toRoute('/')
  }
}
