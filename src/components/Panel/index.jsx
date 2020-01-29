import React from 'react';

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <h3 className="panel-title" >{title}</h3>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

export default Panel;