import { useEffect, useState } from 'react';
import { history } from "@umijs/max";
import css from './index.less';
import { Link } from '@umijs/max';
// import { useHistory  } from '';
export default function Index() {
  const [pathName, setPathName] = useState('/')
  // const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location: any) => {
      // 每当路由变化时执行的操作
      console.log('路由发生了变化！', location?.location?.pathname);
      if(location?.location?.pathname) setPathName(location?.location?.pathname);
    });

    // 在组件卸载时停止监听路由变化
    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    // console.log('useEffect', history)
    // console.log('useEffect', history.location)
    console.log('useEffect', history.location.pathname)
  }, [history.location.pathname])

  const itmes = [
    { name: '工作台', key: '1' },
    { name: '快捷工具', key: '2' },
    { name: '采集模块', key: '3' },
    { name: '关于我们', key: '4' },
  ]

  const rederVue3Route = () => {
    return (
      <div>
        <div className={css.link}><Link to="/app3/home">app3 Home</Link></div>
        <div className={css.link}><Link to="/app3/about">app3 about</Link></div>
      </div>
    )
  }

  const defaultRoute = () => {
    return <>
      {
        itmes.map(item => <div className={css.item} key={item.key}>{item.name}</div>)
      }
    </>
  }

  return (
    <div>
      {
        pathName.includes("app3") ? rederVue3Route() : defaultRoute()
      }
    </div>
  );
}
