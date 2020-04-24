import * as Yup from 'yup'

export default async(req, res, next) => {
  try {
    const schema = Yup.object().shape({
      page: Yup.number()
    })
    
    await schema.validate(req.body, { abortEarly: false })

    return next()
  }
  catch (e) {
    return res.status(400).json({ error: 'Erro na validação.', messages: e.inner})
  }
}
