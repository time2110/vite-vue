import serviceAxios from '../index'

export const getUserList = (data) => {
  return serviceAxios({
    url: '/api/user',
    method: 'get',
    data
  })
}
export const loginApi = (data) => {
  return serviceAxios({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
