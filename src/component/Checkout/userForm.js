import { Col, Form } from 'react-bootstrap';

const UserForm = ({
  cities,
  name,
  street,
  cityId,
  zipCode,
  province,
  handleNameChange,
  handleStreetChange,
  handleCityChange,
}) => {
  const renderCityDropDown = () => {
    return (
      <Form.Row>
        <Col lg={6} xs={8}>
          <Form.Control
            as='select'
            onChange={(e) => handleCityChange(e)}
            value={cityId}
          >
            <option value={null}>City</option>
            {cities
              ? cities.map((cityItem, index) => (
                  <option value={cityItem.id} key={index}>
                    {cityItem.cityName}
                  </option>
                ))
              : null}
          </Form.Control>
        </Col>
        <Col lg={4} xs={4}>
          <Form.Control placeholder='State' value={province} disabled />
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
        <Form.Control
          type='text'
          placeholder='Zip'
          value={zipCode}
          disabled
        />
      </Form.Group>
    </Form>
  );
};

export default UserForm;
