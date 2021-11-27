import { useState, useRef } from 'react';
import { FormikProps } from 'formik';
import Modal from 'components/Modal';
import Button, { styles as buttonStyles } from 'components/Button';

import LoginForm, { LoginFormValues } from './LoginForm';

const LoginModal = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef<FormikProps<LoginFormValues>>(null);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  const submitForm = () => {
    formRef.current?.submitForm();
  };

  return (
    <>
      <Button className={buttonStyles.linkButton} onClick={handleOpen}>
        Login
      </Button>
      <Modal confirmText="Login" handleClose={handleClose} handleConfirm={submitForm} headerText="Please login" isOpen={modalVisible}>
        <LoginForm ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default LoginModal;
