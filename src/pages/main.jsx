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
import AreaData from '../data/area.json';

import './main.css';

const processData = (area) => {
  const p = AreaData.find(p => p.name === area.provinceShortName);
  if (p) {
    area.pinyin = p.pinyin;
    area.cities = area.cities.map(city => {
      const c1 = p.cities.find(c => c.cityName == city.cityName);
      c1 && (city.fullCityName = c1.fullCityName);
      return city;
    });
  }
  return area;
};

const App = () => {
  const [data, setData] = useState({});
  const [province, setProvince] = useState(null);

  const dxy_pneumonia = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://dxy-pneumonia.lsong.workers.dev`))
      .then(res => res.json())

  useEffect(() => {
    dxy_pneumonia().then(setData);
  }, []);

  const { StatisticsService, TimelineService, IndexRumorList } = data;
  const AreaStat = (data.AreaStat || []).map(processData);

  const handleClickMap = name => {
    const p = AreaStat.find(x => x.provinceShortName === name);
    p && setProvince(p);
  };
  return (
    <React.Fragment>
      <Header province={province} onBack={() => setProvince()} />
      <Overview data={province ? province : StatisticsService} />
      <AreaMap data={AreaStat} province={province} onClick={handleClickMap} />
      <Trending province={province} />
      <AreaTable data={AreaStat} />
      <News data={TimelineService} province={province} />
      <Rumors data={IndexRumorList} />
      <Trip />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
