import { Button, Navbar, Container, Nav } from 'react-bootstrap';

import useLogout from '../../hooks/useLogout';

const AppNavbar = () => {
  const { mutate: logout } = useLogout();

  return (
    <Navbar expand="lg" className="primary-color">
      <Container fluid className="px-4">
        <Navbar.Brand>
          <div className="app-background px-4" style={{ borderRadius: 15 }}>
            VulManager
          </div>
        </Navbar.Brand>
        <Nav>
          <Button
            size="sm"
            className="border-0 sm-height"
            variant="danger"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
