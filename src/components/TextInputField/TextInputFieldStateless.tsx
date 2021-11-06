import { InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';

import styles from './TextInputField.module.css';

const TextInputFieldStateless = (props: InputHTMLAttributes<HTMLInputElement> & FieldProps): JSX.Element => {
  const { field, form, ...rest } = props;
  return <input {...rest} className={styles.textInputField} type="text" onBlur={field.onBlur} onChange={field.onChange} />;
};
export default TextInputFieldStateless;
