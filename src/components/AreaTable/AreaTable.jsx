import React from 'react';
import ProvinceTable from './ProvinceTable';

const AreaTable = ({ data }) => {
  return (
    <table className="area-detail">
      <thead>
        <tr>
          <th width="150px" >地区</th>
          <th>疑似</th>
          <th>确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <tbody>
        {
          (data || [])
            .sort((a, b) => b.confirmedCount - a.confirmedCount)
            .map((province, i) => <ProvinceTable key={`province-${i}`} data={province} />)
        }
      </tbody>
    </table>
  );
};

export default AreaTable;