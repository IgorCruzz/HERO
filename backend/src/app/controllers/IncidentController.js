import Incident from '../models/Incident'
import Ong from '../models/Ong'
import File from '../models/File'

class IncidentController {
   async index (req, res) {   
    const { page = 1 } = req.query

    const count = await Incident.count()

    const incidents = await Incident.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      include: [{ model: Ong, as: 'ong', attributes: ['id', 'name', 'email', 'whatsapp', 'uf', 'city'] },
                { model: File, as: 'File'}]
    })

    res.header('X-Total-Count', count)
    

    return res.json(incidents)
  }

  async store (req, res) { 
    const { title, description, value, file } = req.body   
 
    const incident = await Incident.create({
      file,
      title,
      description, 
      value,
      ong_id: req.userId
    })
  
    return res.json(incident)
  }

  async delete (req, res) {
    const { id } = req.params

    const incident = await Incident.findByPk(id)

    if (incident.ong_id !== req.userId) {
      return res.status(401).json({ error: 'Operation not permitted' })
    }

    await incident.destroy()

    return res.status(204).json()
  }


  async update (req, res) {
    const { id } = req.params
    
    const incident = await Incident.findByPk(id)

    await incident.update(req.body)

    return res.json(incident)
  }
}
export default new IncidentController()
