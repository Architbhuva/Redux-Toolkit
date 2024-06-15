import {combineReducers} from 'redux'
import { cartData } from './reducer'
import {productData} from './productreducer'
export default combineReducers({
    cartData,
    productData
})