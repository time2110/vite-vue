// 提取 url参数
export const extractUrlParams = (url) => {
    // [?&] 匹配问号 ? 或和号 &，表示参数的起始位置
    // ([^=#]+) 匹配参数键，不包括等号 = 或井号 #
    // =([^&#]*) 匹配等号 = 后面的参数值，不包括井号 # 或和号 &
    // /g 表示全局匹配，以处理多个参数
    const regex = /[?&]([^&#]+)=([^&#]*)/g;
    const params = {};
    let match;
    while ((match = regex.exec(url))) {
        const key = decodeURIComponent(match[1]);
        const value = decodeURIComponent(match[2]);
        params[key] = value;
    }
    return params;
}