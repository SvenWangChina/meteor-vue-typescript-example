/**
 * 所有正则表达式
 *
 * @exports
 */

/**
 * 用户名
 * 11位手机号码
 *
 * @export
 * @type {RegExp}
 */
export const usernameRegExp: RegExp = /^\d{11}$/;

/**
 * 登录密码
 *
 * @export
 * @type {RegExp}
 */
export const passwordRegExp: RegExp = /(.*?)/;

/**
 * 玩家ID
 * 非0开头的至少6位字符串
 *
 * @export
 * @type {RegExp}
 */
export const userIdRegExp: RegExp = /^[1-9]\d{5,}$/;

/**
 * 昵称验证
 * 1～8位字母+数字+汉字
 *
 * @export
 * @type {RegExp}
 */
export const nicknameRegExp: RegExp = /^[\uAC00-\uD7A3]{1,6}$|^[\dA-Za-z]{1,8}$/;

/**
 * 验证码验证
 * 6位数字
 *
 * @export
 * @type {RegExp}
 */
export const verifyCodeRegExp: RegExp = /^\d{6}$/;


