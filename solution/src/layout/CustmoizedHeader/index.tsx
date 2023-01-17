import React from 'react';
import './style.scss';

const CustomizedHeader: React.FC = () => (
  <div className='cutomized-header' data-testid='customized-header-container'>
    <img
      src='/assets/images/ripl.svg'
      className='ripl-logo'
      data-testid='ripl-logo'
    />
  </div>
);
export default CustomizedHeader;
