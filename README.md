# redux
redux学习。

执行   npm start  查看效果。


redux 进行状态管理。

action - store(pre state,action) -  reducers(new state) - store.getState() - dom更新
 
import { createStore } from 'redux'

const store = createStore(reducers);
store.dispatch({ type: 'INCREMENT' });
store.getState()
store.subscribe(render)  //希望被更的新组件