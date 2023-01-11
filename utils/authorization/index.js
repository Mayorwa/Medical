export const Authorization = {
  get: {
    value(type) {
      const name = `${type}=`
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },
    token() {
      return Authorization.get.value('token')
    },
  },
  set: {
    token(token) {
      // Store In cookie too
      const d = new Date()
      d.setTime(d.getTime() + 99999999 * 24 * 60 * 60 * 1000)
      const expires = 'expires=' + d.toUTCString()
      document.cookie = 'token=' + token + ';' + expires + ';path=/'
      return Authorization.get.token()
    },
  },
  delete: {
    token() {
      document.cookie = 'token=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
      return ''
    },
  },
  check: {
    isAuthenticated() {
      return !!Authorization.get.token()
    },
  },
}
