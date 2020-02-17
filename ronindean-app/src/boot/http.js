// import Http from 'lib/http'
import { http } from 'lib/http'

export default ({ Vue }) => {
  Vue.prototype.$http = http // new Http()
}
