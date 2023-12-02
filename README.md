# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

# 知识点

    lerna pnpm-worspace qiankun

# ppnm

    pnpm add @craco/craco -D
    pnpm add @craco/craco -C ./packages/sub-react

# 子应用

    ## react 18
        使用create-react-app 创建的项目默认是无法修改其内部的webpack配置的，使用craco覆盖配置。
        需要配置craco： https://blog.csdn.net/qq_37070696/article/details/133816896
    ## vue3 vite
        需要使用vite-plugin-qiankun配合使用
        https://blog.csdn.net/m0_37653407/article/details/131109089

# 注意

    1.当创建多个微应用时，public下index.html的id尽量不要重复，相关id修改后，要同步修改src文件下index.js中render函数内部的querySelector函数及getElementById函数所传值。
    2.微应用src文件下index.js中的<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react-micro1" : "/"}>标签内，"/react-micro1"要与主应用activeRule的值一致，否则会找不到路径。
