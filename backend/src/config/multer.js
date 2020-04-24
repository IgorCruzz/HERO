import { diskStorage } from 'multer'
import { resolve, extname } from 'path'
import crypto from 'crypto'

export const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, resolve(__dirname, '..', '..', 'tmp', 'uploads'))
  },
  filename: (req, file, cb) => {
    cb(null, `${crypto.randomBytes(10).toString('Hex')}${extname(file.originalname)}`)
  }
})
