import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Button, Input } from 'antd';
import CustomizedCard from '../CustomizedCard';
import ControlledPagination from '../ControlledPagination';
import { FilterOutlined } from '@ant-design/icons';
import './style.scss';

export interface IPetsData {
  Breed?: string;
  DOB?: string;
  Owner?: string;
  PetsName?: string;
  Picture?: string;
  Species?: string;
  Summary?: string;
  featured?: boolean;
}

const CustomizedGrid: React.FC<any> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [petsData, setPetsData] = useState<IPetsData[]>([]);
  useEffect(() => {
    setPetsData(props.pets);
  }, []);
  const featuredPets = petsData.filter((item: any) => item.featured);
  const extraPets = petsData.filter((item: any) => !item.featured);
  const sortedData = [...featuredPets, ...extraPets];
  const blankItem = (3 - (featuredPets.length % 3)) % 3;
  sortedData.splice(
    featuredPets.length,
    0,
    ...new Array(blankItem).fill({ featured: true })
  );
  const currentData = sortedData.slice((currentPage - 1) * 9, currentPage * 9);
  const featuredCurrentData = currentData.filter((item) => item.featured);
  const extraCurrentData = currentData.filter((item) => !item.featured);
  const pageNum: any = useParams().id;
  const [filteringKeyword, setFilteringKeyword] = useState('');

  const onInputChange = (e: any) => {
    setFilteringKeyword(e.target.value);
  };
  const onFilterBtnClicked = () => {
    setPetsData(
      petsData.filter((item) => Object.values(item).includes(filteringKeyword))
    );
  };
  useEffect(() => {
    setCurrentPage(pageNum);
  }, [pageNum]);
  return (
    <>
      <div
        className='btn-container'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {currentData.some((item) => item.featured == true) && (
          <div className='div-featured'>Featured Pets</div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '500px',
          }}
        >
          <Input
            style={{ width: 304, fontSize: '20px' }}
            placeholder='Input Filtering Keyword'
            value={filteringKeyword}
            onChange={onInputChange}
          ></Input>
          <Button
            onClick={onFilterBtnClicked}
            icon={<FilterOutlined />}
            style={{
              backgroundColor: '#1677ff',
              color: 'white',
              fontSize: '30px',
              width: '200px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Filter
          </Button>
        </div>
      </div>

      <Row justify='space-between' style={{ gap: '20px' }}>
        {featuredCurrentData.map((data: any, index: number) => (
          <Col sm={{ span: 10 }} lg={{ span: 7 }} key={index}>
            {data.Owner && <CustomizedCard src={data} />}
          </Col>
        ))}
      </Row>
      {currentData.some((item) => item.featured !== true) && (
        <div className='div-all-pets'>All Pets</div>
      )}
      <Row justify='space-between' style={{ gap: '20px' }}>
        {extraCurrentData.map((data: any, index: number) => (
          <Col sm={{ span: 10 }} lg={{ span: 7 }} key={index}>
            <CustomizedCard src={data} />
          </Col>
        ))}
      </Row>
      <ControlledPagination totalNum={petsData.length} />
    </>
  );
};

export default CustomizedGrid;
