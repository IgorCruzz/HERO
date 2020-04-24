import Incident from '../models/Incident' 
import File from '../models/File'

class ProfileController {
  async index (req, res) {
    const incidents = await Incident.findAll({
       where: { ong_id: req.userId },
       include: [{ model: File, as: 'File'}]   
      })
    return res.json(incidents)
  }
}

export default new ProfileController()
 
 