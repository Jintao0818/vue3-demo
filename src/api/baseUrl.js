let baseUrl = ''
switch (import.meta.env.MODE) {
  case 'development':
    baseUrl = '' //开发环境
    break
  case 'production':
    baseUrl = '' //生产环境
    break
}

export default baseUrl
