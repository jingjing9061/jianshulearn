import React, {Component}from 'react';
import {GlobalStyled} from './style.js';
import Header from './common/header/index.js';
import {GlobalIcon} from './statics/iconfont/iconfont.js';
import store from './store/index';
import { Provider } from 'react-redux';


class App extends Component {
  render () {
    return (
      // Provier把store的数据提供给内部组件
      <Provider store={store}>
          <GlobalStyled/>
          <GlobalIcon/>
          <Header/>
      </Provider>
    )
  }
}

export default App;
