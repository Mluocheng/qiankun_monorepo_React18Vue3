import './public-path'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let root;
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function createRoot(props) {
  // container中包含了qiankun创建的dom，它会插入一个带有id为root的dom
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#app1') : document.querySelector('#app1'));
}
// 独立运行，直接调用 createRoot函数 render
if (!window.__POWERED_BY_QIANKUN__) {
  createRoot({});
  // @ts-ignore
  root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  );
}

// lifecycle => 初始化
export async function bootstrap(props) {
  console.log(props)
}
// lifecycle => 挂载
export async function mount(props) {
  createRoot(props);
  //qiankun环境中渲染
  root.render(
    <React.StrictMode
      // 对两种不同的环境分别给出不同的基础路径
      basename={window.__POWERED_BY_QIANKUN__ ? '/app1' : '/'}
    >
      <App />
    </React.StrictMode>
  )
}

// lifecycle => 卸载
export async function unmount(_props) {
  root.unmount();
  root = null;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
