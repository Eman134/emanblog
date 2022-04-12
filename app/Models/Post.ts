import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public user_id: number
  @column()
  public user_avatar: string
  @column()
  public user_name: string
  @column()
  public title: string
  @column()
  public tag: string
  @column()
  public content: string
  @column()
  public image: string
  @column()
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
