import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './main.css';

const API = `http://lab.isaaclin.cn`;

const request = path =>
  Promise
    .resolve()
    .then(() => fetch(API + path))
    .then(res => res.json())
    .then(res => {
      if (res.success)
        return res.results;
      throw res;
    });

const Header = () => {
  return (
    <header>
      <h1>新型冠状病毒 肺炎疫情实时动态</h1>
    </header>
  );
};

const Overview = () => {
  const [data, setData] = useState({});
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => request('/nCoV/api/overall'))
      .then(([result]) => result)
      .then(setData)

  useEffect(() => {
    fetchData();
  }, []);
  const { confirmedCount, suspectedCount, curedCount, deadCount } = data;
  return (
    <ul className="overview" >
      <li>
        <em>{confirmedCount}</em>
        <span>确诊病例</span>
      </li>
      <li>
        <em>{suspectedCount}</em>
        <span>疑似病例</span>
      </li>
      <li>
        <em>{curedCount}</em>
        <span>治愈人数</span>
      </li>
      <li>
        <em>{deadCount}</em>
        <span>死亡人数</span>
      </li>
    </ul>
  );
};

const AreaMap = () => {
  return (
    <div></div>
  );
};

const Trending = () => {
  return (
    <div></div>
  );
};

const AreaDetail = () => {
  const [area, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => request(`/nCoV/api/area`))
      .then(setData)

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <table className="area-detail">
      <thead>
        <tr>
          <th>地区</th>
          <th>疑似</th>
          <th>确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <tbody>
        {
          area
            .sort((a, b) => b.confirmedCount - a.confirmedCount)
            .map(p => (
              <tr>
                <td>{p.provinceShortName}</td>
                <td>{p.suspectedCount}</td>
                <td>{p.confirmedCount}</td>
                <td>{p.curedCount}</td>
                <td>{p.deadCount}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

const News = ({ num = '10' } = {}) => {
  const [list, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => request(`/nCoV/api/news?num=${num}`))
      .then(setData)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {
        list.map(news => (
          <li>
            <h3>{news.title}</h3>
            <p>{news.summary}</p>
            <time>{news.pubDate}</time>
            <a href={news.sourceUrl} >{news.infoSource}</a>
          </li>
        ))
      }
    </ul>
  );
};

const Rumors = ({ num = '10' } = {}) => {
  const [list, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => request(`/nCoV/api/rumors?num=${num}`))
      .then(setData)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {
        list.map(rumor => (
          <li id={`rumor-${rumor.id}`} >
            <h3>{rumor.title}</h3>
            <a href={rumor.sourceUrl}>
              <p>{rumor.mainSummary}</p>
            </a>
            <p>{rumor.body}</p>
          </li>
        ))
      }
    </ul>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Overview />
        <AreaMap />
        <Trending />
        <AreaDetail />
        <News />
        <Rumors />
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('app'));
