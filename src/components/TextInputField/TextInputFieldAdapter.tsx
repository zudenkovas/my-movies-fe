import { InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';

import styles from './TextInputField.module.css';

const TextInputFieldAdapter = (props: InputHTMLAttributes<HTMLInputElement> & FieldProps): JSX.Element => {
  const { field, form, value, ...rest } = props;
  return <input className={styles.textInputField} type="text" value={field.value} onBlur={field.onBlur} onChange={field.onChange} {...rest} />;
};
export default TextInputFieldAdapter;
