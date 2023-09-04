import serviceAxios from '../index'

export const getUserList = (data) => {
  return serviceAxios({
    url: '/api/user',
    method: 'get',
    data
  })
}
// 登录接口，返回 token
export const loginApi = (data) => {
  return serviceAxios({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
// 获取用户详情，角色权限
export const getUserInfoApi = (data) => {
  return serviceAxios({
    url: '/api/user/info',
    method: 'get',
    data
  })
}
// 登出
export const logoutApi = (data) => {
  return serviceAxios({
    url: '/api/user/logout',
    method: 'get',
    data
  })
}