import { Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateName,
  updateStreet,
  updateSelectCity,
  updateZip,
} from '../../actions';

const UserForm = ({ cities }) => {
  const dispatch = useDispatch();

  const { name, street, city, zip } = useSelector(
    (state) => state.checkout.userInfo
  );

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleStreetChange = (e) => {
    dispatch(updateStreet(e.target.value));
  };

  const handleCityChange = (e) => {
    const index = e.target.value;
    if (cities[index]) {
      dispatch(updateSelectCity(index));
      dispatch(updateZip(cities[index].zipCode));
    }
  };

  const renderCityDropDown = () => {
    return (
      <Form.Row>
        <Col lg={6} xs={8}>
          <Form.Control
            as='select'
            onChange={(e) => handleCityChange(e)}
            value={city}
          >
            <option value={null}>City</option>
            {cities
              ? cities.map((city, index) => (
                  <option value={index} key={index}>
                    {city.cityName}
                  </option>
                ))
              : null}
          </Form.Control>
        </Col>
        <Col lg={4} xs={2}>
          <Form.Control placeholder='State' disabled />
        </Col>
      </Form.Row>
    );
  };

  return (
    <Form>
      <Form.Group controlId='nameControl'>
        <Form.Control
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Control
          type='text'
          placeholder='Street'
          value={street}
          onChange={(e) => handleStreetChange(e)}
        />
      </Form.Group>
      {renderCityDropDown()}
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Label></Form.Label>
        <Form.Control type='text' placeholder='Zip' value={zip} disabled />
      </Form.Group>
    </Form>
  );
};

export default UserForm;
