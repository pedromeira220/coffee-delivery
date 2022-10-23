type keyOptions = '@coffee-delivery:cep-1.0.0'

export const localStorageManager = {
  setItem(key: keyOptions, value: string) {
    return localStorage.setItem(key, value)
  },
  getItem(key: keyOptions) {
    const valueInLocalStorage = localStorage.getItem(key)

    switch (key) {
      case '@coffee-delivery:cep-1.0.0':
        return valueInLocalStorage
      default:
        return valueInLocalStorage
    }
  },
}
