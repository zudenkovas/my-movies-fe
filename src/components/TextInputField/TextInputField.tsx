import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

import TextInputFieldAdapter from './TextInputFieldAdapter';

const TextInputField = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => <Field {...props} component={TextInputFieldAdapter} />;

export default TextInputField;
