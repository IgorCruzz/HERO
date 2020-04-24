import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcrypt'
class Ong extends Model {
  static init (sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        reset_password_token: Sequelize.STRING, 
        confirmed: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    )
    Ong.addHook('beforeCreate', async ong => {
      if (ong.password) {
        ong.password_hash = await bcrypt.hashSync(ong.password, 10)
      }
    })

    Ong.addHook('beforeUpdate', async ong => {
      if(ong.password) {
        ong.password_hash = await bcrypt.hashSync(ong.password, 10)
      }
    })

    return Ong
  }

  verifyPassword (password) {
    return bcrypt.compare(password, this.password_hash)
  }
}
export default Ong
