import { forwardRef } from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import TextInputField from 'components/TextInputField';

type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
};

export type LoginFormValues = {
  userName: string;
  password: string;
};

const formValidationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = forwardRef<FormikProps<LoginFormValues>, LoginFormProps>(({ onSubmit }, ref): JSX.Element => {
  return (
    <Formik initialValues={{ userName: '', password: '' }} innerRef={ref} validationSchema={formValidationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <TextInputField id="userName" label="User name" name="userName" placeholder="Enter user name" />
          <TextInputField id="password" label="Password" name="password" placeholder="Enter user password" />
        </Form>
      )}
    </Formik>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
