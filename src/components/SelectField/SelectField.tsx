import { Field } from 'formik';

import SelectFieldAdapter from './SelectFieldAdapter';
import { SelectFieldStatelessProps } from './SelectFieldStateless';

const SelectField = (props: SelectFieldStatelessProps): JSX.Element => {
  return <Field {...props} component={SelectFieldAdapter} />;
};

export default SelectField;
