import faker from 'faker'
import { factory } from 'factory-girl'
import Ong from '../src/app/models/Ong'
import Incident from '../src/app/models/Incident'

factory.define('Ong', Ong, {
  name: faker.name.firstName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	whatsapp: faker.random.number(),
	city: faker.address.city(),
	uf: faker.address.countryCode()
})

factory.define('Incident', Incident, {
	title: faker.lorem.word(),
	description: faker.lorem.words(),	
	value: faker.finance.mask()
})

export default factory