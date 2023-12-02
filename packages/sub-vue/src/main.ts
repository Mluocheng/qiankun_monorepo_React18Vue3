
/* eslint-disable @typescript-eslint/no-unused-expressions */
import './assets/main.css'
import './public-path';
import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import { renderWithQiankun, qiankunWindow, type QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import router from './router'

let app: any | null;


function render() {
    app = createApp(App)
    app.use(router)
    app.mount('#app2')
  }

  export async function unmount() {
    app.unmount('#app2')
    app = null
  }

const initQianKun = () => {
    renderWithQiankun({
        // bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
        // 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
        bootstrap() {
            console.log('app2  bootstrap');
        },
        // 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法，也可以接受主应用传来的参数
        mount(_props: any) {
            console.log('app2 mount', _props);
            render()
        },
        // 应用每次 切出/卸载 会调用的unmount方法，通常在这里我们会卸载微应用的应用实例
        async unmount(_props: any) {
            await unmount()
            console.log('app2  unmount', _props);
            
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        update: function (props: QiankunProps): void | Promise<void> {
            console.log('update');
        }
    });
}
 

// 判断是否为乾坤环境，否则会报错[qiankun]: Target container with #subAppContainerVue3 not existed while subAppVue3 mounting!
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
