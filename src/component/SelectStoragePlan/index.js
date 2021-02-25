import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../api';
import StorageCard from './StorageCard';

const SelectStoragePlan = () => {
  const [storagePlans, setStoragePlans] = useState([]);

  useEffect(() => {
    api
      .getAllPlans()
      .then((res) => {
        console.log(res);
        setStoragePlans(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const mockData = {
    id: 2,
    plan: '5x10',
    name: 'room',
    basePrice: '200',
    url:
      'https://vastoragev3.blob.core.windows.net/test/image-5x10.jpg?sp=r&st=2021-02-24T22:09:55Z&se=2022-02-25T06:09:55Z&sv=2020-02-10&sr=b&sig=1sgezfZB%2FJst3Iy0ItqNDfQWAVnZvnft8P5yIC97PnU%3D',
    description:
      "You can fit an entire small room in here. Are you moving apartments? Or maybe you have 3-5 bicycles you just can't bring yourself to sell.",
  };

  const renderStorageplanCard = () => {
    return storagePlans.map((storagePlan) => (
      <Col md={4}>
        <StorageCard
          name={storagePlan.name}
          url={storagePlan.url}
          plan={storagePlan.plan}
          description={storagePlan.description}
          id={storagePlan.id}
          onClick={() => {
            console.log(123);
          }}
        />
      </Col>
    ));
  };
  return renderStorageplanCard ? (
    <Container>
      <Row>
        {renderStorageplanCard()}
      </Row>
    </Container>
  ) : null;
};

export default SelectStoragePlan;
