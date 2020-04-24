import Sequelize, { Model } from 'sequelize'

class File extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `http://localhost:3333/file/${this.name}`
        }
      }
    }, {sequelize})
    return File
  }

 
}

export default File