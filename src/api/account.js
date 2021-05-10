export function login(payload) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ username: payload.username, password: payload.password })
    }, 1000)
  })
}
