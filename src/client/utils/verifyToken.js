import axios from 'axios'
export default async function verifyToken() {
  try {
    const token = window?.localStorage.getItem('token')
    await axios('/user/verify-token', {
      method: 'POST',
      data: {
        token
      }
    })
    return true
  } catch (error) {
    console.log(error)
    window.localStorage.removeItem('token')
    return false
  }
}