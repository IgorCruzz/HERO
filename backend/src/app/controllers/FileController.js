import File from '../models/File'

class FileController {
  async store(req, res){    
    const { filename: name, size, mimetype } = req.file

    if (size > 1000000) {
      return res.status(400).json({ error: 'Escolha uma foto com tamanho máximo de 1mb' })
    }

    if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
      return res.status(400).json({ error: 'Insira uma imagem em PNG ou JPEG' })
    }

    const file = await File.create({    
      name
    })
    return res.json(file)
  }

  async show(req, res){
    const { id } = req.params
    const file = await File.findByPk(id)
    return res.json(file)
  }
}

export default new FileController()