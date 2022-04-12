import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle({ response, session }: HttpContextContract, next: () => Promise<void>) {
    if (!session.get('user')) {
      response.redirect().toRoute('/login')
      return
    }
    await next()
  }
}
