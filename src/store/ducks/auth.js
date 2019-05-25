export const Types = {
  REQUEST_ACCESS: 'auth/REQUEST_ACCESS',
  REQUEST_ACCESS_SUCCESS: 'auth/REQUEST_ACCESS_SUCCESS',
  REQUEST_ACCESS_FAIL: 'auth/REQUEST_ACCESS_FAIL',
}

export const Creators = {
  requestLogin: () => ({
    type: Types.REQUEST_ACCESS,
    payload: {
      fetching: true,
    },
  }),
  requestLoginSuccess: payload => ({
    type: Types.REQUEST_ACCESS_SUCCESS,
    payload: {
      fetching: false,
      ...payload,
    },
  }),
}

/* dispatchers */
export function doLogin({ credentials }) {
  return dispatch => {
    dispatch(Creators.requestAccess())
  }
}

const defaultState = {
  fetching: false,
  logged: false,
}

function authStore(state = defaultState, action) {
  const { payload, type } = action
  switch (type) {
    case Types.REQUEST_ACCESS:
    case Types.REQUEST_ACCESS_SUCCESS:
      return { ...state, ...payload }
    case Types.REQUEST_ACCESS_FAIL:
      return { ...defaultState, ...payload }
    default:
      return state
  }
}

export default authStore
