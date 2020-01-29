import React, { useState, useEffect } from 'react';
import Panel from '../Panel';
import Button from '../Button';

const Trip = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://2019ncov.nosugartech.com/data.json`))
      .then(res => res.json())
      .then(res => res.data)

  useEffect(() => {
    fetchData().then(setData);
  }, []);
  return (
    <Panel title="行程查询" >
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
            data
              .slice(0, page * 10)
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
      <Button onClick={() => setPage(page + 3)} >查看更多</Button>
    </Panel>
  );
};

export default Trip;