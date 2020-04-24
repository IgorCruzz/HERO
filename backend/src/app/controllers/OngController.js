import Ong from '../models/Ong'
import RegisterOng from '../jobs/RegisterOng'
import Queue from '../../lib/Queue'
import crypto from 'crypto'
import Token from '../models/Token'

class OngController {
  async store (req, res) {
    const { email, name, password, confirmPassword } = req.body

    const checkName = await Ong.findOne({ where: { name } })
    if (checkName) {
      return res.status(400).json({ error: 'Este nome já esta em uso' })
    }
    
    const checkEmail = await Ong.findOne({ where: { email } })
    if (checkEmail) {
      return res.status(400).json({ error: 'Este e-mail já está em uso' })
    }
 
    if(password !== confirmPassword) {
      return res.status(400).json({ error: 'As senhas não batem'})
    }   
  

    const ong = await Ong.create(req.body)

    const token = await Token.create({
      id: ong.id,
      token: crypto.randomBytes(16).toString('hex')
    })

    await Queue.add(RegisterOng.key, { token, ong })

    return res.json(ong)
  }

  async index (req, res) {
    const ongs = await Ong.findAll()
    return res.json(ongs)
  }
}

export default new OngController()
