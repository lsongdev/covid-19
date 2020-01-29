import React from 'react';

import { Icon, Button } from 'antd';

import './index.css';

class Aria2 extends React.Component {
  render(){
    return (
      <div>
        <h2>Aria2</h2>
        <div>
          <Button type="primary" ><Icon type="plus-circle" theme="filled" />Add</Button>
          <Button><Icon type="forward" theme="filled" /></Button>
          <Button><Icon type="delete" theme="filled" /></Button>
        </div>
      </div>
    );
  }
}

export default Aria2;