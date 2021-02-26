import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StorageCard = ({ name, url, plan, description, id, onClick }) => {
  return (
    <Card
      style={{ width: '18rem' }}
      className='text-center'
      id={id}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant='top' src={url} />
        <Card.Subtitle className='mb-2 text-muted'>{plan}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Link to="/checkout">
          <Button variant='primary' onClick={() => onClick()}>
            Select
          </Button>
        </Link>

      </Card.Body>
    </Card>
  );
};

export default StorageCard;
