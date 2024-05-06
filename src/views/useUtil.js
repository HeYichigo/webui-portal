const useUtils = () => {
  const getServiceId = () => {
    let session_id = window.sessionStorage.getItem('ID')
    return session_id === null ? -1 : parseInt(session_id)
  }
  const setServiceId = (id) => {
    window.sessionStorage.setItem('ID', id)
  }
  return { getServiceId, setServiceId }
}
export { useUtils }
