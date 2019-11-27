import * as actionTypes from './constants';
import { fromJS } from 'immutable';//fromJS可以把数据对象转化为immutable对象
//immutable 库 防止修改state里面的数据

const defaultState = fromJS({
	focused:false
});

export default (state = defaultState, action)=>{
	if (action.type === actionTypes.SEARCH_FOCUS) {
		//immutable对象的set方法，会结合之前immutable对象的值
		//和设置的值，返回一个全新的对象。所以并没有对state进行修改
		return state.set('focused',true)//使用immuta对象设置参数
		// {
		// 	focused:true
		// }
	}

	if (action.type === actionTypes.SEARCH_BLUR) {
		return  state.set('focused',false)
	}

	return state;
}