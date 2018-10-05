import ApiClient from './ApiClient'

class PostApi extends ApiClient {
  list(userId, ...rest) {
    return this.get(`/app-users/${userId}/posts`, ...rest)
  }
  create(userId, post) {
    return this.post(`/app-users/${userId}/posts`, { data: post })
  }
}

let postApi = new PostApi()

export default postApi