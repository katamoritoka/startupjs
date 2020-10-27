import { LOGOUT_URL, SIGN_IN_URL } from '../isomorphic/constants'
import { setAuthInfo } from './middlewares'

export default function initDefaultRoutes (router) {
  router.get(LOGOUT_URL, function (req, res) {
    delete req.session.loggedIn
    delete req.session.userId
    req.logout()
    res.redirect(SIGN_IN_URL)
  })
}
