import get from './get'
import update from './update'
import remove from './remove'

// export User API routes
export default (app) => {
  get(app)
  update(app)
  remove(app)
}
