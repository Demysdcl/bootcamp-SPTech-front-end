import passwordGenerator from 'password-generator'
import Queue from '../lib/Queue'
import { REGISTRATION_EMAIL } from '../lib/QueueNames'

export default {
  async store(req, res) {
    const { name, email } = req.body

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    }

    await Queue.add(REGISTRATION_EMAIL, { user })

    return res.json(user)
  },
}
