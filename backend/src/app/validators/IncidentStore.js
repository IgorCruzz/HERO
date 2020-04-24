import * as Yup from 'yup'

export default async (req, res, next) => {
  try {
    
    const schema = Yup.object().shape({
      title: Yup.string().required().min(3).max(20),
      description: Yup.string().required(),
      value: Yup.number().required()
    })

   await schema.validate(req.body, { abortEarly: false})

   return next()
  }
  catch(e) {
    return res.status(400).json({ error: 'Erro na validação', messages: e.inner})
  }
}