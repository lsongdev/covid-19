import React, { useState, useEffect } from 'react';
import Panel from '../Panel';

import './index.css';

const Pager = ({ count, size = 10, onChange }) => {
  const [page, setPage] = useState(1);
  const pages = Math.ceil(count / size);

  const emit = page => {
    setPage(page);
    const offset = (page - 1) * 10;
    onChange && onChange(page, { start: offset, end: offset + size });
  };

  useEffect(() => {
    emit(1);
  }, [count]);

  const prev = n => {
    return <li><button disabled={page <= 1} onClick={() => emit(page - 1)} >上一页</button></li>
  }
  const next = n => {
    return <li><button disabled={page + 1 >= pages} onClick={() => emit(page + 1)} >下一页</button></li>
  };

  return (
    <div className="pager">
      <ul >
        {prev(page)}
        <li><input type="number" value={page} onChange={e => emit(e.target.value)} /></li>
        {next(page)}
      </ul>
      <input type="number" value="10" />
    </div>
  );
};

const Trip = () => {
  const [offset, setOffset] = useState({ start: 0, end: 10 });
  const [data, setData] = useState([]);
  const [t_type, setFilter] = useState(null);
  const [keyword, setKeyword] = useState('');

  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://2019ncov.nosugartech.com/data.json`))
      .then(res => res.json())
      .then(res => res.data)

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const onType = e => setKeyword(e.target.value);
  const COLS = ['t_no', 't_pos_start', 't_pos_end'];
  const matchKeyword = (item, i) => {
    if (!keyword) return true;
    const regexp = new RegExp(keyword, 'i');
    const matched = COLS.filter(key => regexp.test(item[key]));
    const isMatch = matched.length > 0;
    return isMatch;
  };
  const list = data
    .filter(x => t_type === null ? true : x.t_type === t_type)
    .filter(matchKeyword)

  // console.log('search', keyword, list);
  return (
    <Panel title="行程查询" >
      <div className="trip-query" >
        <input placeholder="输入关键词，例如航班号、车次、地点" onChange={onType} />
        <ul className="trip-filter" >
          <li className={t_type === null && 'active'} onClick={() => setFilter(null)} >全部</li>
          <li className={t_type === 1 && 'active'} onClick={() => setFilter(1)} >飞机</li>
          <li className={t_type === 2 && 'active'} onClick={() => setFilter(2)} >火车</li>
          <li className={t_type === 3 && 'active'} onClick={() => setFilter(3)} >地铁</li>
          <li className={t_type === 4 && 'active'} onClick={() => setFilter(4)} >长途客车/大巴</li>
          <li className={t_type === 5 && 'active'} onClick={() => setFilter(5)} >公交车</li>
          <li className={t_type === 6 && 'active'} onClick={() => setFilter(6)} >出租车</li>
          <li className={t_type === 7 && 'active'} onClick={() => setFilter(7)} >轮船</li>
          <li className={t_type === 8 && 'active'} onClick={() => setFilter(8)} >公共场所</li>
        </ul>
      </div>
      <table className="trip">
        <thead>
          <tr>
            <th>日期</th>
            <th>车次</th>
            <th>始发站</th>
            <th>终点站</th>
            <th>详情</th>
          </tr>
        </thead>
        <tbody>
          {
            list
              .slice(offset.start, offset.end)
              .map(item => (
                <tr>
                  <td>{item.t_date.replace('2020-', '')}</td>
                  <td>{item.t_no}</td>
                  <td>{item.t_pos_start}</td>
                  <td>{item.t_pos_end}</td>
                  <td><a href={item.source}>详情</a></td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <Pager count={list.length} onChange={(page, offset) => setOffset(offset)} />
    </Panel>
  );
};

export default Trip;