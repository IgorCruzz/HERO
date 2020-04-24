import Mail from '../../lib/Mail'
 
class RegisterOng {
  get key () {
    return 'RegisterOng'
  }

   async handle ({ data })  {
    const { token, ong } = data
    await Mail.sendMail({
      from: 'igorskt2009@gmail.com',
      to: ong.email,
      subject: 'Seu cadastro foi realizado com sucesso',
      template: 'register',
      context: {
        token: token.token,     
      }      
    })
  }
}
export default new RegisterOng()
