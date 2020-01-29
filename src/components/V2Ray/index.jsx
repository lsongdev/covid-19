import React from 'react';

import { Icon, Button } from 'antd';

class V2ray extends React.Component {
  render() {
    return (
      <div>
        <h2>V2ray</h2>
        <div>
          <Button>Add Inbound</Button>
          <Button>Add Outbound</Button>
        </div>
      </div>
    );
  }
}

export default V2ray;