import { type HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

const verificationRequestSchema = vine.object({
  'hub.mode': vine.literal('subscribe'),
  'hub.challenge': vine.number(),
  'hub.verify_token': vine.literal('env'),
})

export default class TestsController {
  async verification({ response, request }: HttpContext) {
    const data = request.qs()
    const payload = await vine.validate({
      schema: verificationRequestSchema,
      data,
    })
    return response.status(200).send(payload)
  }
}
