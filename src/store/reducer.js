
/* 
 *解决Reducer代码过多不易维护的问题 把一个Reducer拆成不同类目的Reducer 最后再整合
 */
import  { combineReducers } from 'redux';

// import headerReducer from '../common/header/store/reducer'; //header相关的reducer 
//as es6语法给 reducer起别名
import { reducer as headerReducer} from '../common/header/store';

//把拆分的reducer合并进来
 const reducer =combineReducers({
	header: headerReducer
})
export default reducer;