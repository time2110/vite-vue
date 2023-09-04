
// 免登录白名单，匹配路由 path
const whiteListByPath = [
    '/login',
    '/home'
]

// 免登录白名单，匹配路由 name
const whiteListByName = []

// 判断是否在白名单
export const isWhiteList = (to) => {
    return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name)!==-1
}