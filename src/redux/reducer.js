/**
 * 真正的管理状态数据的函数
 * 作用：根据老的state和action,产生新的state
 */
import {
    INCREAMENT,
    DECREMENT
} from './action-Types'

export default function count ( state=1,action ) {
    switch (action.type) {
        case INCREAMENT:
            return state+action.number
        case DECREMENT:  
            return state-action.number
        default:
            //初始状态值
            return state
    }
}