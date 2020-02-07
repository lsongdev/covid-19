import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react/lib/core';
import Panel from '../Panel';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';

const Trending = ({ province }) => {
  const [data, setData] = useState([]);
  let path = `/api/overall?latest=0`;
  if (province) path = `/api/area?latest=0&province=${province.provinceName}`;
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://lab.isaaclin.cn/nCoV` + path))
      .catch(() => fetch(`https://lab.ahusmart.com/nCoV` + path))
      .then(res => res.json())
      .then(res => {
        if (res.success)
          return res.results;
        throw new Error()
      })

  const getDate = time => {
    const date = new Date(time);
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${m}/${d}`;
  };
  useEffect(() => {
    fetchData()
      .then(data => data.map(x => {
        x.date = getDate(x.updateTime);
        return x;
      }))
      .then(data => data.filter((x, i) => i === data.findIndex(y => y.date === x.date)))
      .then(data => data.sort((a, b) => a.updateTime - b.updateTime))
      .then(data => data.map((x, i) => {
        const yesterday = data[i-1];
        x.suspectedIncr = yesterday ? x.suspectedCount - yesterday.suspectedCount : 0;
        x.confirmedIncr = yesterday ? x.confirmedCount - yesterday.confirmedCount : 0;
        x.curedIncr = yesterday ? x.curedCount - yesterday.curedCount : 0;
        x.deadIncr = yesterday ? x.deadCount - yesterday.deadCount : 0;
        return x;
      }))
      .then(setData);
  }, [province]);

  const getOption = () => {
    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['疑似病例', '确诊病例', '治愈人数', '死亡人数']
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: data.map(x => getDate(x.updateTime))
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '疑似病例',
          type: 'line',
          data: data.map(x => x.suspectedCount)
        },
        {
          name: '确诊病例',
          type: 'line',
          data: data.map(x => x.confirmedCount)
        },
        {
          name: '治愈人数',
          type: 'line',
          data: data.map(x => x.curedCount)
        },
        {
          name: '死亡人数',
          type: 'line',
          data: data.map(x => x.deadCount)
        },
        {
          name: '新增疑似',
          type: 'line',
          data: data.map(x => x.suspectedIncr)
        },
        {
          name: '新增确诊',
          type: 'line',
          data: data.map(x => x.confirmedIncr)
        },
        {
          name: '新增治愈',
          type: 'line',
          data: data.map(x => x.curedIncr)
        },
        {
          name: '新增死亡',
          type: 'line',
          data: data.map(x => x.deadIncr)
        },
      ]
    };
  };

  return (
    <Panel title={"疫情趋势" + (province ? ` - ${province.provinceName}` : '')} >
      <ReactEcharts
        echarts={echarts}
        option={getOption()}
        lazyUpdate={true}
        style={{ height: '350px', width: '100%' }} />
    </Panel>
  );
};

export default Trending;