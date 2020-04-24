import { Sequelize } from 'sequelize'
import databaseConfig from '../config/database'

import Ong from '../app/models/Ong'
import Incident from '../app/models/Incident'
import File from '../app/models/File' 
import Token from '../app/models/Token' 

const models = [Ong, Incident, File, Token]

class Database {
  constructor () {
    this.connection = new Sequelize(databaseConfig)
    this.init()
  }

  init () {
    models.map(model => model.init(this.connection))
    models.map(
      model => model.associate && model.associate(this.connection.models)
    )
  }
}

export default new Database()
