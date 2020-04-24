import { Router } from 'express'
import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'
import ProfileController from './app/controllers/ProfileController'
import SessionController from './app/controllers/SessionController' 
import FileController from './app/controllers/FileController' 
import AuthenticationController from './app/controllers/AuthenticationController'
import PasswordController from './app/controllers/PasswordController'  
import AuthMiddleware from './app/middlewares/auth'
import validateIncidentIndex from './app/validators/IncidentIndex'
import validateIncidentStore from './app/validators/IncidentStore'
import validateOngStore from './app/validators/OngStore'
import validatePasswordUpdate from './app/validators/PasswordUpdate'
import validateSessionStore from './app/validators/SessionStore'
import multer from 'multer'
import { storage } from './config/multer'

const routes = new Router()
const upload = multer({ storage })

routes.post('/session',validateSessionStore, SessionController.store)
routes.post('/ongs', validateOngStore, OngController.store)
routes.put('/password', PasswordController.store)
routes.put('/reset-password/:email',validatePasswordUpdate, PasswordController.update)
routes.post('/authentication/:token', AuthenticationController.store)

routes.use(AuthMiddleware) 
routes.post('/files', upload.single('file'), FileController.store)
routes.get('/files/:id', FileController.show)
routes.get('/ongs', OngController.index)
routes.post('/incidents', upload.single('file'), validateIncidentStore, IncidentController.store)
routes.get('/incidents',validateIncidentIndex, IncidentController.index)
routes.put('/incidents/:id', IncidentController.update)
routes.delete('/incidents/:id', IncidentController.delete)
routes.get('/profile', ProfileController.index)

export default routes
