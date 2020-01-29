import React, { useState, useEffect } from 'react';
import Panel from '../Panel';
import Button from '../Button';
import { formatResponse } from '../../utils';

import './index.css';

const Rumors = ({ data = [] }) => {
  const [page, setPage] = useState(1);
  const [list, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch('https://file1.dxycdn.com/2020/0130/454/3393874921745912507-115.json?t=' + parseInt(Date.now() / (1000 * 60))))
      .then(res => res.json())
      .then(formatResponse)

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <Panel title="官方辟谣" >
      <ul className="rumors-list">
        {
          (list || data)
            .slice(0, page * 10)
            .map(rumor => (
              <li key={`rumor-${rumor.id}`} >
                <h3>{rumor.title}</h3>
                <a href={rumor.sourceUrl}>
                  {rumor.mainSummary}
                </a>
                <p>{rumor.body}</p>
              </li>
            ))
        }
      </ul>
      <Button onClick={() => setPage(page + 1)} >查看更多</Button>
    </Panel>
  );
}

export default Rumors;