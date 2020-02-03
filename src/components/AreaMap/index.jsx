import React, { useState, useEffect } from 'react';
import Panel from '../Panel';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/tooltip';

import ReactEcharts from 'echarts-for-react/lib/core';

const AreaMap = ({ province, data = [], onClick }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);
    if (province) {
      import(`echarts/map/json/province/${province.pinyin}.json`).then(map => {
        echarts.registerMap(province.pinyin, map.default)
        setLoading(false)
      })
    } else {
      import(`echarts/map/json/china.json`).then(map => {
        echarts.registerMap('china', map.default)
        setLoading(false)
      })
    }
  }, [province]);

  const processData = (data = []) => {
    if (province) {
      const p = data.find(x => x.provinceShortName === province.provinceShortName);
      return p.cities.map(city => {
        return {
          name: city.fullCityName,
          value: city.confirmedCount
        };
      });
    }
    return data.map(x => ({
      name: x.provinceShortName,
      value: x.confirmedCount
    }));
  };

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
        top: province ? 0 : '30%',
        left: 'auto',
        inRange: {
          color: [
            '#ffc0b1',
            '#ff8c71',
            '#ef1717',
            '#9c0505',
            '#6c0000',
          ]
        },
        pieces: [
          { min: 10000 },
          { min: 1000, max: 9999 },
          { min: 500, max: 999 },
          { min: 100, max: 499 },
          { min: 10, max: 99 },
          { min: 1, max: 9 },
        ],
        padding: 5,
        showLabel: !province,
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
        mapType: province ? province.pinyin : 'china',
        data: processData(data),
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
    <Panel title={"疫情地图" + (province ? ` - ${province.provinceName}` : '')} >
      {
        loading ?
          <div className="loading">正在加载地图数据 ...</div> :
          <ReactEcharts
            echarts={echarts}
            option={getOption()}
            lazyUpdate={true}
            style={{ width: '100%' }}
            onEvents={{
              click(e) {
                onClick && onClick(e.name);
              }
            }}
          />
      }
    </Panel>
  );
};


export default AreaMap;