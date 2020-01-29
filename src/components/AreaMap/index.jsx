import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Panel from '../Panel';

const AreaMap = ({ data = [] }) => {
  const getOption = () => {
    return {
      tooltip: {
        trigger: 'item',
      },
      visualMap: {
        show: true,
        type: 'piecewise',
        min: 0,
        max: 2000,
        align: 'right',
        right: 0,
        inRange: {
          color: [
            '#ffc0b1',
            '#ff8c71',
            '#ef1717',
            '#9c0505'
          ]
        },
        pieces: [
          { min: 1000 },
          { min: 500, max: 999 },
          { min: 100, max: 499 },
          { min: 10, max: 99 },
          { min: 1, max: 9 },
        ],
        padding: 5,
        showLabel: true,
        text: ['高', '低'],
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10
        }
      },
      series: [{
        left: 'center',
        type: 'map',
        name: '确诊人数',
        label: {
          show: true,
          position: 'inside',
          fontSize: 6
        },
        mapType: 'china',
        data: data.map(x => {
          return {
            name: x.provinceShortName,
            value: x.confirmedCount
          };
        }),
        zoom: 1.2,
        roam: false,
        showLegendSymbol: false,
        emphasis: {},
        rippleEffect: {
          show: true,
          brushType: 'stroke',
          scale: 2.5,
          period: 4
        }
      }]
    }
  };
  return (
    <Panel title="疫情地图" >
      {/* <img width="100%" src={StatisticsService.imgUrl} /> */}
      <ReactEcharts option={getOption()} style={{ width: '100%' }} />
    </Panel>
  );
};


export default AreaMap;