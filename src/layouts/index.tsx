// import { Outlet } from 'umi';
import Header from './header';
// import Sidebar from './sidebar';
import css from './index.less';
import { Outlet } from '@/.umi/exports';

export default function Layouts() {
  return (
    <div className={css.layout}>
      <div className={css.header}><Header /></div>
      <div className={css.body}>
        {/* <div className={css.sidebar}><Sidebar /></div> */}
        <div className={css.content}><Outlet /></div>
      </div>
    </div>
  );
}
