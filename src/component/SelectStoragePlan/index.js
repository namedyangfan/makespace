import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStoragePlans, selectStoragePlan } from '../../actions';
import StorageCard from './StorageCard';

const SelectStoragePlan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStoragePlans());
  }, [dispatch]);

  const storagePlans = useSelector((state) => state.storagePlan.storagePlans);

  const renderStorageplanCard = () => {
    return storagePlans.map((storagePlan) => (
      <Col xs md={6} lg={4} key={storagePlan.id} >
        <StorageCard
          name={storagePlan.name}
          url={storagePlan.url}
          plan={storagePlan.plan}
          description={storagePlan.description}
          id={storagePlan.id}
          onClick={() => {
            dispatch(selectStoragePlan(storagePlan));
          }}
        />
      </Col>
    ));
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <p className='text-center mt-4 mb-4'>Select a Storage Plan</p>
        </Col>
      </Row>
      <Row>{storagePlans ? renderStorageplanCard() : null}</Row>
    </Container>
  );
};

export default SelectStoragePlan;
