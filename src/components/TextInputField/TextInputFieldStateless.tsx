import { InputHTMLAttributes } from 'react';

import styles from './TextInputField.module.css';

export type TextInputFieldStatelessProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextInputFieldStateless = ({ error, value, onBlur, onChange, label, ...rest }: TextInputFieldStatelessProps): JSX.Element => {
  return (
    <div className={styles.fieldWrapper}>
      {label && (
        <label className={styles.textInputFieldLabel} htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input className={styles.textInputField} type="text" value={value} onBlur={onBlur} onChange={onChange} {...rest} />
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
};

export default TextInputFieldStateless;
