import { forwardRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import TextInputField from 'components/TextInputField';

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

const formValidationSchema = Yup.object({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = forwardRef<FormikProps<LoginFormValues>, LoginFormProps>(({ onSubmit }, ref): JSX.Element => {
  return (
    <Formik initialValues={{ email: '', password: '' }} innerRef={ref} validationSchema={formValidationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <TextInputField id="email" label="User email" name="email" placeholder="Enter user email" />
          <TextInputField id="password" label="Password" name="password" placeholder="Enter user password" type="password" />
        </Form>
      )}
    </Formik>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
