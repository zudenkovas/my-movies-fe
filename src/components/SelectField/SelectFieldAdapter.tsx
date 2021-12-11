import { useRef, useEffect, useState } from 'react';
import { FieldProps } from 'formik';

import SelectFieldStateless, { SelectFieldStatelessProps, SelectRefValue, Option } from './SelectFieldStateless';

const SelectFieldAdapter = ({ className, id, isClearable = false, field, form, options, ...rest }: SelectFieldStatelessProps & FieldProps): JSX.Element => {
  const selectRef = useRef<SelectRefValue>(null);
  const [fieldSelectValue, setFieldSelectValue] = useState<Option | Option[] | undefined>(undefined);
  const { name, value } = field;
  const { setFieldValue } = form;

  useEffect(() => {
    const valueToSet = options.filter((option) => value.includes(option?.value));
    setFieldSelectValue(valueToSet);
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
