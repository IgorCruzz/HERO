import Bee from 'bee-queue'
import RegisterOng from '../app/jobs/RegisterOng'
import RecoverPassword from '../app/jobs/RecoverPassword'

const jobs = [RegisterOng, RecoverPassword]

class Queue {
  constructor () {
    this.queues = {}

    this.init()
  }

   init () {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: { port: 6379, host: '127.0.0.1' }
        }),
        handle
      }
    })
  }

  add (queue, job)  {
    return this.queues[queue].bee.createJob(job).save()
  }

  processQueue ()  {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key]
      bee.on('failed', this.handleFailure).process(handle)
    })
  }

  handleFailure (job, err)  {
    console.log(`Queue ${job.queue.name}: FAILED`, err)
  }
}
export default new Queue()
