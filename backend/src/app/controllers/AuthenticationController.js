import Token from '../models/Token'
import Ong from '../models/Ong'

class AuthenticationController {
  async store(req, res){
    const { token } = req.params

    const tokenExists = await Token.findOne({ where: { token }})

    const ong = await Ong.findOne({ where: { id: tokenExists.id}})

    await ong.update({
      confirmed: true
    })

    return res.json(ong)
  }

}
export default new AuthenticationController()