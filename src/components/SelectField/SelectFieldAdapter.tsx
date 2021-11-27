import { useRef, useEffect } from 'react';
import { FieldProps } from 'formik';

import SelectFieldStateless, { SelectFieldStatelessProps, SelectRefValue } from './SelectFieldStateless';

const SelectFieldAdapter = ({ className, id, isClearable = false, field, form, options, ...rest }: SelectFieldStatelessProps & FieldProps): JSX.Element => {
  const selectRef = useRef<SelectRefValue>(null);
  const { name, value } = field;
  const { setFieldValue } = form;
  const fieldSelectValue = options.find((option) => option?.value === value);

  useEffect(() => {
    if (!value) {
      selectRef.current?.clearValue();
    }
  }, [value]);

  const handleChange = (selectValue: string | string[]) => {
    setFieldValue(name, selectValue);
  };

  return (
    <div className={className}>
      <SelectFieldStateless
        {...rest}
        id={id}
        isClearable={isClearable}
        name={name}
        options={options}
        ref={selectRef}
        value={fieldSelectValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectFieldAdapter;
