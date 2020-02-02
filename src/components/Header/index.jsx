import React from 'react';

import './index.css';

const Header = ({ province, onBack }) => {
  return (
    <header>
      <h1>
        <small>新型冠状病毒</small>
        <br />肺炎疫情实时动态{ province ? ` · ${province.provinceName}` : '' }
        <i></i>
      </h1>
      { province && <span className="back" onClick={onBack} >返回全国</span> }
    </header>
  );
};

export default Header;