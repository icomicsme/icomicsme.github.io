import { equals } from 'ramda'
import error, { errstate } from 'lib/error'
import reply from 'lib/reply'

export default (
  () => (req, res, next) => {
    const { body, query, method } = req

    console.log({ body, query, method })

    const { sign } = query

    if (!!!sign) return reply(res, () => { throw error(...errstate.SIGN_ERROR) })

    if (equals('GET', method)) {
      // ...by Query
    } else {
      // ...by Body
    }

    next()
  }
)
