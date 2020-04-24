 
import jwt from 'jsonwebtoken'
 
import Ong from '../models/Ong'

class SessionController {
  async store (req, res){   

    const { email, password } = req.body
    const ong = await Ong.findOne({ where: { email } })

    if (!ong || !await ong.verifyPassword(password)) {
      return res.status(400).json({ error: 'O e-mail ou a senha não corresponde a uma conta.' })
    }    

    return res.json({
      ong,
      token: jwt.sign({ id: ong.id }, 'f04af61b3f332afa0ceec786a42cd365', {
        expiresIn: '7d'
      })
    })
  }
}

export default new SessionController()
