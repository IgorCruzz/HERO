import Sequelize, { Model } from 'sequelize'

class Token extends Model {
  static init(sequelize){
    super.init({
      token: Sequelize.STRING,

    }, { sequelize})
    return Token
  }

  static associate(models){
    Token.belongsTo(models.Ong, { foreignKey: 'id', as: 'ong_id'})
  }
}
export default Token