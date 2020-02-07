import React from 'react';

import './index.css';

const format = n => {
  if(n > 0) return `+${n}`;
  return n;
}

const Overview = ({ data }) => {
  const { confirmedCount, suspectedCount, curedCount, deadCount } = data || {};
  const { confirmedIncr, suspectedIncr, curedIncr, deadIncr } = data || {};
  return (
    <ul className="overview" >
      <li>
        <i>{ format(confirmedIncr) }</i>
        <em>{confirmedCount || 'N/A'}</em>
        <span>确诊病例</span>
      </li>
      <li>
        <i>{ format(suspectedIncr) }</i>
        <em>{suspectedCount || 'N/A'}</em>
        <span>疑似病例</span>
      </li>
      <li>
        <i>{ format(curedIncr) }</i>
        <em>{curedCount || 'N/A'}</em>
        <span>治愈人数</span>
      </li>
      <li>
        <i>{ format(deadIncr) }</i>
        <em>{deadCount || 'N/A'}</em>
        <span>死亡人数</span>
      </li>
    </ul>
  );
};

export default Overview;