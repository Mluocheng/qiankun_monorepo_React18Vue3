// import { Link } from 'umi';
import { Link } from '@umijs/max';
import css from './index.less';

export default function Index() {
  return (
    <div className={css.header}>
      <div className={css.link}><Link to="/home">首页</Link></div>
      <div className={css.link}><Link to="/app1">项目</Link></div>
      <div className={css.link}><Link to="/app2">财务</Link></div>
      <div className={css.link}><Link to="/app3">app3</Link></div>
    </div>
  );
}
