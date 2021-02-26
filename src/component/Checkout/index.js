import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCities } from '../../actions';
import UserForm from './userForm';

const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const { cities } = useSelector((state) => state.checkout);

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col>
          <p className='text-center mt-4 mb-4'>Checkout</p>
        </Col>
      </Row>
      <Row>
        <Col lg={5} sm={12}>
          <UserForm cities={cities}/>
        </Col>
        <Col lg={{ span: 5, offset: 1 }} sm={12}>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
