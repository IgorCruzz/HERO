import * as Yup from 'yup'

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      whatsapp: Yup.number().required(),
      city: Yup.string().required(),
      uf: Yup.string().required().length(2)
    })
   
    await schema.validate(req.body, { abortEarly: false})

    return next()
  }
  catch(e) {
    return res.status(400).json({ error: 'Erro na validação', messages: e.inner})
  }
}