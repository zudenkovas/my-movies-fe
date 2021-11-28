import { useState, useRef, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { FormikProps } from 'formik';
import { Credentials, logIn } from 'api/auth';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { useProfile } from 'providers/ProfileProvider';

import LoginForm, { LoginFormValues } from './LoginForm';
import styles from './LoginModal.module.css';

const LoginModal = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const { data, isLoading, isSuccess, mutate } = useMutation((credentials: Credentials) => logIn(credentials));
  const { isLoggedIn, signIn, signOut } = useProfile();
  const navigate = useNavigate();
  const formRef = useRef<FormikProps<LoginFormValues>>(null);

  useEffect(() => {
    if (data && data.token) {
      signIn(data.token);
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      setModalVisible(false);
      navigate('/my-movies');
    }
  }, [isSuccess]);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (values: Credentials) => {
    if (values.email && values.password) {
      mutate(values);
    }
  };

  const submitForm = () => {
    formRef.current?.submitForm();
  };

  return (
    <>
      <Button className={styles.linkButton} onClick={isLoggedIn ? signOut : handleOpen}>
        {isLoggedIn ? 'Sign out' : 'Sign in'}
      </Button>
      <Modal confirmText="Login" handleClose={handleClose} handleConfirm={submitForm} headerText="Please login" isOpen={modalVisible}>
        {isLoading && <Loader />}
        <LoginForm ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default LoginModal;
