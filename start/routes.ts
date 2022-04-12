import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PostsController.index')

Route.get('/posts', 'PostsController.postsview').middleware(['auth'])

Route.get('/posts/create', 'PostsController.createview').middleware(['auth'])

Route.post('/posts/store', 'PostsController.store').middleware(['auth'])

Route.get('/me', 'UsersController.index').middleware(['auth'])

Route.get('/login', 'AuthController.login')

Route.get('/logout', 'AuthController.logout')

Route.get('/auth/callback', 'AuthController.callback')
