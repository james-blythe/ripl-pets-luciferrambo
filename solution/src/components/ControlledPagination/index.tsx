import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
import './style.scss';

const ControlledPagination: React.FC<any> = (props) => {
  const { id: pageNum } = useParams();
  const [current, setCurrent] = useState<number>();
  let navigate = useNavigate();
  useEffect(() => {
    setCurrent(Number(pageNum));
  }, [pageNum]);
  const onChange: PaginationProps['onChange'] = (page: number) => {
    setCurrent(page);
    navigate(`/${page}`);
    console.log('page', page);
  };

  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={props.totalNum}
      className='pagination-component'
    />
  );
};

export default ControlledPagination;
