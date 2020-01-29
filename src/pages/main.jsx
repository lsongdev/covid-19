import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Overview from '../components/Overview';
import AreaMap from '../components/AreaMap';
import AreaTable from '../components/AreaTable';
import Trending from '../components/Trending';
import News from '../components/News';
import Rumors from '../components/Rumors';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

import './main.css';

const App = () => {
  const [data, setData] = useState({});

  const dxy_pneumonia = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://dxy-pneumonia.lsong.workers.dev`))
      .then(res => res.json())

  useEffect(() => {
    dxy_pneumonia().then(setData);
  }, []);

  const { AreaStat, StatisticsService, TimelineService, IndexRumorList } = data;
  return (
    <React.Fragment>
      <Header />
      <Overview data={StatisticsService} />
      <AreaMap data={AreaStat} />
      <Trending />
      <AreaTable data={AreaStat} />
      <News data={TimelineService} />
      <Rumors data={IndexRumorList} />
      <Trip />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
