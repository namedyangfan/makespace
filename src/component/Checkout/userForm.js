import { Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { updateName } from '../../actions';

const UserForm = ({ cities }) => {
  const dispatch = useDispatch();
  
  const { name } = useSelector((state) => state.checkout.userInfo);

  const renderCityDropDown = () => {
    return (
      <Form.Row>
        <Col lg={6}>
          <Form.Control as='select' defaultValue='City...'>
            <option>City</option>
            {cities
              ? cities.map((city) => <option>{city.cityName}</option>)
              : null}
          </Form.Control>
        </Col>
        <Col lg={4}>
          <Form.Control placeholder='State' disable />
        </Col>
      </Form.Row>
    );
  };

  const handleNameChange = (e) =>{
    console.log('e.target', e.target.value);
    dispatch(updateName('sss'))
  }
  return (
    <Form>
      <Form.Group controlId='nameControl'>
        <Form.Control
          type='name'
          placeholder='Name'
          name='name'
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Control type='text' placeholder='Street' />
      </Form.Group>
      {renderCityDropDown()}
      <Form.Group controlId='exampleForm.ControlInput1'>
        <Form.Label></Form.Label>
        <Form.Control type='text' placeholder='Zip' disabled />
      </Form.Group>
    </Form>
  );
};

export default UserForm;
