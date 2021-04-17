import Queue from 'bull'
import RegistrationMailJob from '../mail/RegistrationMailJob'

const jobs = [RegistrationMailJob]

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
}

const queues = jobs.map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}))

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name)
    return queue.bull.add(data, queue.options)
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job, err) => {
        console.error('Job failed', queue.key, queue.data)
        console.error(err)
      })
    })
  },
}
