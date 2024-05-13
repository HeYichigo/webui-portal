const useUtils = () => {
  const getServiceId = () => {
    let session_id = window.sessionStorage.getItem('ID')
    return session_id === null ? -1 : parseInt(session_id)
  }
  const setServiceId = (id: any) => {
    window.sessionStorage.setItem('ID', id)
  }
  const setFrame = (url: string) => {
    window.sessionStorage.setItem('frame', url)
  }
  const getFrame = () => {
    return window.sessionStorage.getItem('frame')
  }
  const getName = () => {
    return window.sessionStorage.getItem('name') as string
  }
  const setName = (name: string) => {
    window.sessionStorage.setItem('name', name)
  }
  const getToken = () => {
    return window.sessionStorage.getItem('token') as string
  }
  const setToken = (token: string) => {
    window.sessionStorage.setItem('token', token)
  }
  return { getServiceId, setServiceId, setFrame, getFrame, getName, setName, getToken, setToken }
}
export { useUtils }
