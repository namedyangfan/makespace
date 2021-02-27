import { Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='primary'>
      <Navbar.Brand href="/">
      <img
        src="https://cdn.makespace.com/s/img/ws/logo-white.svg"
        className="d-inline-block align-top"
        alt="Makespace logo"
      />
    </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation