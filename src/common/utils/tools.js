/**
 * 是否是空对象
 * @param {Object} obj
 */
export const isEmptyObject = obj => {
  for (let i in obj) {
    return false
  }
  return true
}

export const pickBy = object => {
  if (!object) return
  const result = {}
  Object.keys(object).forEach(key => {
    if (object[key]) {
      result[key] = object[key]
    }
  })
  return result
}

/**
 * 判断是否是移动端
 */
export function isMobile(){
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}
