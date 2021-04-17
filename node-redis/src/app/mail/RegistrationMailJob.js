import { REGISTRATION_EMAIL } from '../lib/QueueNames'
import Mail from './Mail'

export default {
  key: REGISTRATION_EMAIL,
  options: {
    delay: 5000,
    priority: 3,
  },
  async handle({ data }) {
    const { name, email } = data.user
    await Mail.sendMail({
      from: 'DIO <contato@dio.com.br>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${name}, bem-vindo a DIO`,
    })
  },
}
