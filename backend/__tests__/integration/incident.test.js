import request from 'supertest'
import app from '../../src/app'
import truncate from '../util/truncate'
import factory from '../factories'

describe('Incident', () => {
  beforeEach(async () => {
    await truncate()
  })

  it('deve ser possivel cadastrar um incident', async () => {
    const incident = await factory.attrs('Incident')
    const response = await request(app).post('/incidents')
    .send(incident)

    expect(response.body).toHaveProperty('id')
  })
})