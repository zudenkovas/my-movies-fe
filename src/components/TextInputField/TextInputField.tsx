import { InputHTMLAttributes } from 'react';
import { Field } from 'formik';

import TextInputFieldStateless from './TextInputFieldStateless';

const TextInputField = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => <Field {...props} component={TextInputFieldStateless} />;

export default TextInputField;
