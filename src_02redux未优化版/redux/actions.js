/**
 * 包含n个用于创建action对象的工厂函数（每次调用会产生一个新的对象）
 */
import {
    INCREAMENT,
    DECREMENT
} from './action-Types'

/**
 * 创建增加的action(同步action)返回action对象
 */
export const increment = (number) =>({type:INCREAMENT,number})
/**
 * 创建减少的action
 */
export const decrement = (number) => ({ type:DECREMENT,number})