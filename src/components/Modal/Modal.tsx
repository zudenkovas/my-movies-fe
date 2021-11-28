import { ReactNode } from 'react';
import Button from 'components/Button';

import styles from './Modal.module.css';

type ModalProps = {
  confirmText?: string;
  handleClose?: () => void;
  handleConfirm?: () => void;
  headerText?: string;
  isOpen: boolean;
  children: ReactNode;
};

const Modal = ({ handleClose, handleConfirm, headerText, children, confirmText = 'Confirm', isOpen }: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>{headerText}</div>
        <div className={styles.modalContent}>{children}</div>
        <div className={styles.modalFooter}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
