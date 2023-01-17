import React from 'react';
import { Col, Row } from 'antd';
import CustomizedCard from '../CustomizedCard';

const App: React.FC = () => (
  <>
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
