/**
 * 
 * @param {*} name  储存cookiem名
 * @param {*} value 储存cookiem值
 * @param {*} seconds 储存时间
 */
export function setCookie(name, value, seconds) {
  seconds = seconds || 0;   //seconds有值就直接赋值，没有为0
  var expires = "";
  if (seconds != 0) {      //设置cookie生存时间
      var date = new Date();
      date.setTime(date.getTime() + (seconds * 1000));
      expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + escape(value) + expires + "; path=/";   //转码并赋值
}
/**
* 
* @param {*} c_name  储存cookiem名
*/
export function getCookie(c_name) {
  if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1) {
          c_start = c_start + c_name.length + 1
          var c_end = document.cookie.indexOf(";", c_start)
          if (c_end == -1) c_end = document.cookie.length
          return unescape(document.cookie.substring(c_start, c_end)).replace(/\"/g, "");
      }
  }
  return null;
}
/**
* 
* @param {*} name 储存的cookiem名字
*/
export function clearCookie(name) {
  setCookie(name, "", -1);
}