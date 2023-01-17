import React from 'react';
import { Card, Tag } from 'antd';

const { Meta } = Card;

interface CustomizedCardProps {
  src: any;
}

const CustomizedCard: React.FC<CustomizedCardProps> = ({ src }) => {
  const petData = src;
  const keys = Object.keys(petData);

  return (
    <Card
      hoverable
      cover={
        <>
          <div
            style={{
              width: '100%',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              alt={petData.PetsName}
              src={`/assets/images/${petData.Picture}`}
              width='100%'
              height='100%'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <Tag style={{ fontSize: '20px' }} color='error'>
            {petData.PetsName}
          </Tag>
        </>
      }
    >
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {petData.DOB}
      </div>
      <div style={{ marginBottom: '10px' }}>
        {keys.map((item, index) => {
          if (
            item === 'featured' ||
            item === 'PetsName' ||
            item === 'Picture' ||
            item === 'Summary' ||
            item === 'DOB'
          )
            return;
          return (
            <Tag key={index} color='processing'>
              {petData[item]}
            </Tag>
          );
        })}
      </div>
      <Tag color='success'>{petData.Owner}</Tag>
      <Meta
        description={petData.Summary}
        style={{
          marginTop: '10px',
          height: '500px',
          maxHeight: '400px',
        }}
      />
    </Card>
  );
};

export default CustomizedCard;
