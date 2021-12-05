import { forwardRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import TextInputField from 'components/TextInputField';
import Button from 'components/Button';

import styles from './LoginForm.module.css';

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
  error?: string;
  isSignInForm: boolean;
  onFormTypeChange: () => void;
};

export type LoginFormValues = {
  name?: string;
  email: string;
  password: string;
};

const formValidationSchema = (isSignInFrom?: boolean) =>
  Yup.object({
    ...(!isSignInFrom && { name: Yup.string().required('Required') }),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

const LoginForm = forwardRef<FormikProps<LoginFormValues>, LoginFormProps>(({ error, onSubmit, isSignInForm, onFormTypeChange }, ref): JSX.Element => {
  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} innerRef={ref} validationSchema={formValidationSchema(isSignInForm)} onSubmit={onSubmit}>
      {() => (
        <Form>
          {!isSignInForm && <TextInputField id="name" label="Full name" name="name" placeholder="Enter full name" />}
          <TextInputField id="email" label="User email" name="email" placeholder="Enter user email" />
          <TextInputField id="password" label="Password" name="password" placeholder="Enter user password" type="password" />
          <p className={styles.formChangeText}>
            {isSignInForm ? 'Not a user yet?' : 'Already a user?'}
            <Button className={styles.formChangeButton} onClick={onFormTypeChange}>
              {isSignInForm ? 'Sign-up!' : 'Sign-in!'}
            </Button>
          </p>
          {error && <p className={styles.error}>{error}</p>}
        </Form>
      )}
    </Formik>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
