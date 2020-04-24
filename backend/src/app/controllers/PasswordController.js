import Ong from '../models/Ong' 
import Queue from '../../lib/Queue'
import RecoverPassword from '../jobs/RecoverPassword'
import crypto from 'crypto'
 

class PasswordController {
  async store(req, res){
    const { email } = req.body
  
    const ong = await Ong.findOne({ where: { email }})

    if(!ong) {
      return res.status(400).json({ error: 'Este e-mail não esta cadastrado no sistema'})
    }

    const token = crypto.randomBytes(3).toString('hex')
    const date=  new Date()

    await ong.update({
      reset_password_token: token, 
      reset_password_expiration: toString(date)
    })
    
    await Queue.add(RecoverPassword.key, { ong })

    return res.json(ong)
    
  }
  async update(req, res){
    const { email } = req.params
    const { code, password, confirmPassword } = req.body

    const ong = await Ong.findOne({ where: { email }})  

  
    
    if(code !== ong.reset_password_token) {
      return res.status(400).json({ error: 'Solicitação invalida'})
    }
   
    if(password !== confirmPassword){
      return res.status(400).json({ error: 'A senha nova não bate'})
    }

    await ong.update({ password })

    return res.json(ong)
  }

}
export default new PasswordController()