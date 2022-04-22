// 设置的时候，需要将对象转成字符串
export const setLocal = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取本地的值，需要转换成对象
export const getLocal = (key) => {
  let value = localStorage.getItem(key)
  if (value && (value.includes('[') || value.includes('{'))) {
    return JSON.parse(value)
  } else {
    return localStorage.getItem(key) || ''
  }
}

// export const getLocal = (key) => {
//   if (key.startsWith('[') || key.startsWith('{')) {
//     return JSON.parse(localStorage.getItem(key))
//   } else {
//     return localStorage.getItem(key) || ''
//   }
// }