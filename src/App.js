import React from 'react';
import {GlobalStyled} from './style.js';
import Header from './common/header/index.js';
import {GlobalIcon} from './statics/iconfont/iconfont.js';


function App() {
  return (
    <div className="col">
        <GlobalStyled/>
        <GlobalIcon/>
        <Header/>
    </div>
  );
}

export default App;
