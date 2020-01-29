import React from 'react';

import {
  Tag, Tabs, Form, Input, Select, Button, Table, Divider
} from 'antd';

const { TabPane } = Tabs;

const columns = [
{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
},{
  title: 'Address',
  dataIndex: 'ip',
  key: 'ip',
}, {
  title: 'MAC',
  dataIndex: 'mac',
  key: 'mac',
}, {
  title: 'Hostname',
  dataIndex: 'host',
  key: 'host',
},
{
  title: 'Lease ends on',
  dataIndex: 'time',
  key: 'time',
  render(value){
    const date = new Date(value*1000);
    return <span>{ date.toLocaleString() }</span>
  }
}
];


class DHCP extends React.Component {
  state = {}
  componentDidMount(){
    fetch('/network/dhcp/leases')
    .then(res => res.json())
    .then(leases => {
      this.setState({ leases });
    })
  }
  render() {
    const { leases = [] } = this.state;
    return (
      <div>
        <h2>DHCP</h2>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Leases" key="1">
            <Table columns={columns} dataSource={leases} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default DHCP;