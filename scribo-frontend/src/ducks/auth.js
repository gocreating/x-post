import { createActions, handleActions } from 'redux-actions'

// Action Creators
const plainActionCreators = createActions({
  SET_AUTH: (
    accessToken,
    ttl,
    tokenCreatedAt,
    user
  ) => ({
    accessToken,
    ttl,
    tokenCreatedAt,
    user,
  }),
  CLEAR_AUTH: () => ({}),
})

export const {
  setAuth,
  clearAuth,
} = plainActionCreators

// Reducer
// Inspired from: <https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-2-introducing-redux-saga-130d6872fbe7>
const defaultState = {
  auth: null,
  users: {},
}
export default handleActions({
  [setAuth]: (state, { payload }) => {
    let {
      accessToken,
      ttl,
      tokenCreatedAt,
      user,
    } = payload
    let userId = user.id
    let tokenExpiredAt = new Date((
      new Date(tokenCreatedAt)
    ).getTime() + ttl * 1000)

    return {
      auth: userId,
      users: {
        ...state.users,
        [userId]: {
          accessToken,
          ttl,
          tokenCreatedAt,
          tokenExpiredAt,
          ...user,
        }
      }
    }
  },
  [clearAuth]: () => (defaultState),
}, defaultState)

// Selector
export let selectors = {
  getIsAuth: (state) => Boolean(state.auth),
  getUsers: (state) => (state.users),
  getLoggedUserId: (state) => (state.auth),
  getLoggedUser(state) {
    let userId = this.getLoggedUserId(state)

    if (!userId) {
      return {}
    }
    return this.getUsers(state)[userId]
  },
  getAccessToken(state) {
    return this.getLoggedUser(state).accessToken
  },
}
