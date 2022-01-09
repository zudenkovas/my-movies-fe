import { useState, useRef, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { FormikProps } from 'formik';
import { SignInCredentials, logIn, SignUpCredentials, signUp } from 'api/auth';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { useProfile } from 'providers/ProfileProvider';

import LoginForm, { LoginFormValues } from './LoginForm';
import styles from './LoginModal.module.css';

const LoginModal = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const {
    data: signInData,
    isLoading: signInLoading,
    isSuccess: signInSuccess,
    mutate: userSignIn,
  } = useMutation((credentials: SignInCredentials) => logIn(credentials));
  const {
    data: signUpData,
    isLoading: signUpLoading,
    isSuccess: signUpSuccess,
    mutate: userSignUp,
  } = useMutation((credentials: SignUpCredentials) => signUp(credentials));
  const { isLoggedIn, signIn, signOut } = useProfile();
  const navigate = useNavigate();
  const formRef = useRef<FormikProps<LoginFormValues>>(null);

  useEffect(() => {
    if (signInData && signInData.token) {
      signIn(signInData.token);
    }
  }, [signInData]);

  useEffect(() => {
    if (signInSuccess) {
      setModalVisible(false);
      navigate('/my-movies');
    }
  }, [signInSuccess]);

  useEffect(() => {
    setIsSignInForm(true);
  }, [signUpSuccess]);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    setIsSignInForm(true);
  };

  const handleFormChange = () => {
    setIsSignInForm((prev) => !prev);
  };

  const handleSubmit = (values: SignInCredentials | SignUpCredentials) => {
    if (!isSignInForm && values.email && values.password && 'name' in values && values.name) {
      userSignUp(values);
    } else if (values.email && values.password) {
      userSignIn(values);
    }
  };

  const submitForm = () => {
    formRef.current?.submitForm();
  };

  return (
    <>
      <Button className={styles.linkButton} onClick={isLoggedIn ? signOut : handleOpen}>
        {isLoggedIn ? 'Sign out' : 'Sign in/up'}
      </Button>
      <Modal
        confirmText={isSignInForm ? 'Login' : 'Sign-up'}
        handleClose={handleClose}
        handleConfirm={submitForm}
        headerText={isSignInForm ? 'Please login' : 'Please sign-up'}
        isOpen={modalVisible}
      >
        {signUpSuccess && signUpData && <p>Welcome {signUpData.name}, please login with your new credentials</p>}
        {signInLoading || (signUpLoading && <Loader />)}
        <LoginForm isSignInForm={isSignInForm} ref={formRef} onFormTypeChange={handleFormChange} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default LoginModal;
