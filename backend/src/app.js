import './bootstrap'

import express from 'express'
import routes from './routes'
import './database'
import cors from 'cors'
import { resolve } from 'path'

class App {
 
 constructor () {
    this.express = express()

    this.middleware()
    this.routes()
  }

    middleware ()  {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/file', express.static(resolve(__dirname, '..', 'tmp', 'uploads')))
  }

  routes () {
    this.express.use(routes)
  }
}

export default new App().express
