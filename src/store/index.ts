import {legacy_createStore as createStore} from 'redux'
import { reducer } from '../reducers/counter'

const store = createStore(reducer)

export default store