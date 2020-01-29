import React from 'react';

import {
  Tag, Tabs, Form, Input, Select, Button, Table, Divider
} from 'antd';

const { TabPane } = Tabs;

class ShadowsocksEdit extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Item label="Server Name"  >
            <Input />
          </Form.Item>
          <Form.Item label="Server Address"  >
            <Input />
          </Form.Item>
          <Form.Item label="Server Port"  >
            <Input />
          </Form.Item>
          <Form.Item label="Encryption Method"  >
            <Select />
          </Form.Item>
          <Form.Item label="Password"  >
            <Input />
          </Form.Item>
          <Form.Item  >
            <Button type="primary" block={true} >Save</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}


const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Type',
  dataIndex: 'type',
  key: 'type',
}, {
  title: 'Server',
  dataIndex: 'address',
  key: 'address',
}];

const data = [
  {
    key: '1',
    name: 'jp01-redir',
    type: 'ss-redir',
    server: 'jp01',
    port: 1081
  }
];


class Shadowsocks extends React.Component {
  render() {
    return (
      <div>
        <h2>Shadowsocks</h2>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Server" key="1">
            <ShadowsocksEdit />
          </TabPane>
          <TabPane tab="Service" key="2">
            <Table columns={columns} dataSource={data} />
          </TabPane>
          <TabPane tab="Rules" key="3">
            <Table columns={columns} dataSource={data} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Shadowsocks;