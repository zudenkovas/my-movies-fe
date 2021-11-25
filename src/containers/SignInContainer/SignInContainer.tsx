import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Form, Formik } from 'formik';
import Button from 'components/Button';
import TextInputField from 'components/TextInputField';
import { Credentials, logIn } from 'api/auth';
import { useProfile } from 'prividers/ProfileProvider';

import styles from './SignIn.module.css';

export const SignInContainer = (): JSX.Element => {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const { data } = useQuery(['signIn', credentials], () => credentials && logIn(credentials));

  const { isLoggedIn, signIn } = useProfile();

  useEffect(() => {
    if (data && data.token) {
      signIn(data.token);
    }
  }, [data]);

  const initialValues: Credentials = {
    email: '',
    password: '',
  };

  const onSubmit = (credentials: Credentials) => {
    if (credentials.email && credentials.password) {
      setCredentials(credentials);
    }
  };

  return isLoggedIn ? (
    <Navigate to="/my-movies" />
  ) : (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => {
        return (
          <div className={styles.container}>
            <Form className={styles.form}>
              <TextInputField id="email" name="email" placeholder="Email" />
              <TextInputField id="password" name="password" placeholder="Password" type="password" />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignInContainer;
