import React from 'react';
import {
  Row,
  Col,
  Tag,
  Card,
  Table,
  Divider,
} from 'antd';

import './index.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  sorter: true,
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

class Overview extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
        <Row gutter={16} >
          <Col span={18}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
        <Row gutter={16} >
          <Col span={12}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
          <Col span={12}>
            <Card title="Card title" bordered={false}>Card content</Card>
          </Col>
        </Row>
        <Row gutter={8} >
          <Col span={24}>
            <Card className="card-table" title="Card title" bordered={false}>
              <Table columns={columns} dataSource={data} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Overview;