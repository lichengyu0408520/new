/*
 *redux最核心的管理对象： store
 */
import {createStore} from 'redux'

import reducer from './reducer'

//根据指定的reducer函数，产生一个store对象
//store对象内部管理着新状态数据，状态数据的初始值是reducer的返回值
export default createStore(reducer)