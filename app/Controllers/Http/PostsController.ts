// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ view, session }) {
    return view.render('home', { user: session.get('user') })
  }
  public async postsview({ session, view }) {
    const posts = await Post.query().where('status', 1)
    return view.render('posts', {
      posts: posts.map((post) => {
        return post['$original']
      }),
      user: session.get('user'),
    })
  }
  public async createview({ session, view, post }) {
    return view.render('create', { user: session.get('user'), session, post })
  }
  public async store({ request, session, response }) {
    const data = request.only(['title', 'content', 'image', 'tag'])
    var post: any
    const user = session.get('user')
    if (!data.title || !data.content || !data.image || !data.tag) {
      session.flash({ message: 'Post failed. You need to fill in all the fields!' })
    } else {
      post = await Post.create({
        ...data,
        user_id: user.id,
        user_name: user.name,
        user_avatar: user.avatarUrl,
      })
      session.flash({ message: 'Post created successfully' })
    }
    return response.redirect('/posts/create', { post })
  }
  public async edit({ params, session, view }) {
    const post = await Post.find(params.id)
    return view.render('edit', { post, user: session.get('user') })
  }
}
