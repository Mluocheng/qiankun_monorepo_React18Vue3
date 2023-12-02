import css from './index.less';
export default function Index() {
  const itmes = [
    { name: '工作台', key: '1' },
    { name: '快捷工具', key: '2' },
    { name: '采集模块', key: '3' },
    { name: '关于我们', key: '4' },
  ]
  return (
    <div>
      {
        itmes.map(item => <div className={css.item} key={item.key}>{item.name}</div>)
      }
    </div>
  );
}
