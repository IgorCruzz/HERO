import Mail from '../../lib/Mail'

class RecoverPassword {
  get key(){
    return 'RecoverPassword'
  }

  async handle({ data }){
    const { ong } = data
    await Mail.sendMail({
      from: 'igorskt2009@gmail.com',
      to: ong.email,
      subject: 'Recuperação de senha',
      template: 'password',
      context: {
        code: ong.reset_password_token
      }
      
    })

  }

}
export default new RecoverPassword()