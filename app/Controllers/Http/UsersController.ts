// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class UsersController {
  public async index({ view, session }) {
    const posts = await Post.query().where('user_id', session.get('user').id)
    return view.render('me', {
      posts: posts.map((post) => {
        return post['$original']
      }),
      user: session.get('user'),
    })
  }
}
