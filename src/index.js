import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store' 
import { Provider } from 'react-redux' 

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>  
, document.getElementById('root'));

//绑定监听store内部状态的数据改变的监听

// store.subscribe(() => {//重新渲染标签
//     ReactDOM.render(<App store={store} />,document.getElementById('root'))
// })

