import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import {
  fetchCities,
  updateName,
  updateStreet,
  updateSelectedCity
} from '../../actions';
import UserForm from './userForm';
import Summary from './summary';

const Checkout = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if(Object.keys(selectedStoragePlan).length === 0){
      history.push("/")
    }
    dispatch(fetchCities());
  }, [dispatch, history]);

  const { cities, userInfo } = useSelector((state) => state.checkout);
  const {
    id: cityId,
    cityName,
    zipCode,
    state: province,
    priceFactor,
  } = userInfo.selectedCity;
  const { selectedStoragePlan } = useSelector((state) => state.storagePlan);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleStreetChange = (e) => {
    dispatch(updateStreet(e.target.value));
  };

  const handlePayNow = (payment) => {
    const payload = {
      cityId,
      cityName,
      zipCode,
      state: province,
      payment,
      name: userInfo.name,
      street: userInfo.street
    }
    console.log('payload: ', payload);
    // TODO: implement action for submit payment
  }

  const handleCityChange = (e) => {
    const changedCityId = parseInt(e.target.value);
    const changedCity = cities.find(
      (cityItem) => cityItem.id === parseInt(changedCityId)
    );

    if (changedCity) {
      dispatch(updateSelectedCity(changedCity));
    }
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col>
          <p className='text-center mt-4 mb-4'>Checkout</p>
        </Col>
      </Row>
      <Row>
        <Col lg={5} sm={6} xs={12}>
          <UserForm
            cities={cities}
            name={userInfo.name}
            street={userInfo.street}
            cityId={cityId}
            zipCode={zipCode}
            province={province}
            handleNameChange={handleNameChange}
            handleStreetChange={handleStreetChange}
            handleCityChange={handleCityChange}
          />
        </Col>
        <Col lg={{ span: 5, offset: 1 }} sm={6} xs={12}>
          <Summary
            selectedStoragePlan={selectedStoragePlan}
            name={userInfo.name}
            street={userInfo.street}
            cityName={cityName}
            zipCode={zipCode}
            state={province}
            priceFactor={priceFactor}
            handlePayNow={handlePayNow}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
