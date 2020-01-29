import React from 'react';

import './index.css';

const Overview = ({ data }) => {
  const { confirmedCount, suspectedCount, curedCount, deadCount } = data || {};
  return (
    <ul className="overview" >
      <li>
        <em>{confirmedCount || 'N/A'}</em>
        <span>确诊病例</span>
      </li>
      <li>
        <em>{suspectedCount || 'N/A'}</em>
        <span>疑似病例</span>
      </li>
      <li>
        <em>{curedCount || 'N/A'}</em>
        <span>治愈人数</span>
      </li>
      <li>
        <em>{deadCount || 'N/A'}</em>
        <span>死亡人数</span>
      </li>
    </ul>
  );
};

export default Overview;