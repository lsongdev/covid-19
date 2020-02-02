import React, { useState, useEffect } from 'react';
import Panel from '../Panel';
import Button from '../Button';
import { formatResponse } from '../../utils';

import './index.css';

const News = ({ data = [], province }) => {
  const [page, setPage] = useState(1);
  const [list, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch('https://file1.dxycdn.com/2020/0130/492/3393874921745912795-115.json?t=' + parseInt(Date.now() / (1000 * 60))))
      .then(res => res.json())
      .then(formatResponse)

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <Panel title={ `实时新闻` + (province ? ` - ${province.provinceName}` : '') } >
      <ul className="news-list timeline">
        {
          (list || data)
            .filter(x => province ? province.provinceName === x.provinceName : true)
            .slice(0, page * 10)
            .map((news, i) => (
              <li key={`news-${i}`}>
                <div>
                  <h3>{news.title}</h3>
                  <p>{news.summary}</p>
                  <time time={news.pubDate} >{news.pubDateStr}</time>
                  <a href={news.sourceUrl} >{news.infoSource}</a>
                </div>
              </li>
            ))
        }
      </ul>
      <Button onClick={() => setPage(page + 1)} >查看更多</Button>
    </Panel>
  );
};

export default News;