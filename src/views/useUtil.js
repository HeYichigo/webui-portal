const useUtils = () => {
  const getServiceId = () => {
    let session_id = window.sessionStorage.getItem('ID')
    return session_id === null ? -1 : parseInt(session_id)
  }
  const setServiceId = (id) => {
    window.sessionStorage.setItem('ID', id)
  }
  const setFrame = (url) => {
    window.sessionStorage.setItem('frame', url)
  }
  const getFrame = () => {
    return window.sessionStorage.getItem('frame')
  }
  return { getServiceId, setServiceId, setFrame, getFrame }
}
export { useUtils }
