import Sequelize, { Model } from 'sequelize'

class Incident extends Model {
  static init (sequelize) {
    super.init({
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      file: Sequelize.STRING, 
      value: Sequelize.FLOAT,


    }, { sequelize })
    return Incident
  }

  static associate (models) {
    Incident.belongsTo(models.File, { foreignKey: 'file', as: 'File'})
    Incident.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' })    
  }
}
export default Incident
