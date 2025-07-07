import { JSX } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { login } from '../../services/authService';
import ErrorBanner from '../../components/error-banner/errorBanner';

const SignInPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: login,
    onSuccess: data => {
      localStorage.setItem('user-data', JSON.stringify(data));
      navigate('/vulnerabilities');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      email: data.get('email') as string,
      password: data.get('password') as string,
    };
    mutate(payload);
  };

  return (
    <div className="px-4 mx-auto d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1>Sign In</h1>
      <div className="p-5 secondary-color w-50" style={{ borderRadius: 13 }}>
        <Form id="signInForm" onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter you email" required />
            <Form.Control.Feedback type="invalid">Valid email required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formTitle" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">
              Password of at least 6 characters required
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            form="signInForm"
            type="submit"
            className="primary-color border-0 w-100"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner animation="grow" size="sm" className="me-2" />
                Signing in…
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </Form>
      </div>
      {isError && <ErrorBanner message={`Login failed - ${error.message}`} />}
    </div>
  );
};

export default SignInPage;
