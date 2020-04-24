import request from 'supertest'
import app from '../../src/app'
import truncate from '../util/truncate' 
import factory from '../factories'

describe('Ong', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('deve ser possivel cadastrar uma ong', async () => {
    const ong = await factory.attrs('Ong')
    const response = await request(app)
    .post('/ongs')
    .send(ong)

    expect(response.body).toHaveProperty('id')
  })

  it('nao pode permitir e-mail duplicado', async () => {
    const ong = await factory.attrs('Ong')
    await request(app)
    .post('/ongs')
    .send(ong)

    const response = await request(app)
    .post('/ongs')
    .send(ong)

    expect(response.status).toBe(400)
  })

  it('não é permitido cria uma ong com um nome já existente', async () => {
    const ong = await factory.attrs('Ong')
  await request(app).post('/ongs').send(ong)

  const response = await request(app).post('/ongs')
  .send(ong)

  expect(response.status).toBe(400)
  })
})