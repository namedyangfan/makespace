import { Card, Button } from 'react-bootstrap';

const Summary = ({
  selectedStoragePlan,
  name,
  street,
  cityName,
  zipCode,
  state,
  priceFactor,
}) => {
  const basePrice = parseFloat(selectedStoragePlan.basePrice);
  const adjustPrice = basePrice * (parseFloat(priceFactor) - 1);
  const total = basePrice + adjustPrice;

  const renderSubmitButton = () => {
    if (cityName) {
      return <Button variant='primary'>Submit</Button>;
    }
    return (
      <Button variant='primary' disabled>
        Submit
      </Button>
    );
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>Checkout Summary</Card.Title>
        <Card.Text>Plan Name: {selectedStoragePlan.name}</Card.Text>
        <Card.Text>Plan Size: {selectedStoragePlan.plan}</Card.Text>
        <Card.Text>{`Street: ${street}, City: ${cityName}, State: ${state}, ZIP: ${zipCode}`}</Card.Text>
        <Card.Text className='text-right'>
          {'________________________________________'}
        </Card.Text>
        <Card.Text className='text-right'>
          Base Price: ${selectedStoragePlan.basePrice}
        </Card.Text>
        <Card.Text className='text-right'>
          Location Adjustment: ${adjustPrice && adjustPrice.toFixed(2)}
        </Card.Text>
        <Card.Text className='text-right'>
          Total: ${total && total.toFixed(2)}
        </Card.Text>
        <Card.Text className='text-center'>
          {renderSubmitButton()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Summary;
