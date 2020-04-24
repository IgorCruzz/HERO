import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import exphbs from 'express-handlebars'
import { resolve } from 'path'
import '../bootstrap'

class Mail {
  constructor () {
    this.transporter = nodemailer.createTransport({
      service: 'SendGrid',   
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })
    this.configureTemplate()
  }

     configureTemplate () {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails')

    this.transporter.use(
      'compile',
      hbs({
        viewEngine: exphbs.create({
          extname: '.hbs',
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials')
        }),
        viewPath,
        extName: '.hbs'
      })
    )
  }

  sendMail (message) {
    return this.transporter.sendMail({ ...message })
  }
}
export default new Mail()
