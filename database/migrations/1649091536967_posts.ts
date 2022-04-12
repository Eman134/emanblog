import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title', 254).notNullable()
      table.text('content').notNullable()
      table.string('image', 254).notNullable()
      table.string('tag', 254).notNullable()
      table.bigInteger('user_id').notNullable()
      table.text('user_avatar').notNullable()
      table.string('user_name', 254).notNullable()
      table.boolean('status').defaultTo(1)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
