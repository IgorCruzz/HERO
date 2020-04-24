import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export default async (req , res , next)  => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Insira o token' })
  }

  const [, token] = authorization.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, 'f04af61b3f332afa0ceec786a42cd365')
    req.userId = decoded.id
    next()
  } catch (err) {
    return res.status(401).json({ error: 'token invalido' })
  }
}
