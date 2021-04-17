import BullBoard from 'bull-board'
import 'dotenv/config'
import express from 'express'
import Queue from './app/lib/Queue'
import UserController from './app/user/UserController'

const app = express()

BullBoard.setQueues(Queue.queues.map((queue) => queue.bull))

app.use(express.json())

app.use(`/admin/queues`, BullBoard.UI)

app.post('/users', UserController.store)

app.listen(process.env.PORT, () => {
  console.log(`Server running on the port ${process.env.PORT}`)
})
