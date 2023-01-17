import React from 'react';
import { Col, Row } from 'antd';
import { Button } from 'antd';
import CustomizedCard from '../CustomizedCard';

const App: React.FC = () => (
  <>
    <Button
      style={{
        backgroundColor: '#1677ff',
        color: 'white',
        fontSize: '30px',
        width: '200px',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      Featured Pets
    </Button>
    <Button>Filter</Button>
    <Row>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
      <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <CustomizedCard />
      </Col>
    </Row>
  </>
);

export default App;
