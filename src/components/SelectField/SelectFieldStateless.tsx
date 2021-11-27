import { forwardRef } from 'react';
import Select, { Props, OnChangeValue, GroupBase, SelectInstance } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type Option = { label: string; value: string };
export type OptionGroup = GroupBase<Option>;

export type SelectFieldStatelessProps = Omit<Props<Option, boolean>, 'options' | 'onChange'> & {
  className?: string;
  id: string;
  isClearable?: boolean;
  name: string;
  options: Option[];
  onChange?: (value: string | string[]) => void;
};

export type SelectRefValue = SelectInstance<Option, boolean>;

const SelectFieldStateless = forwardRef(
  (
    { className, id, name, isClearable = false, isMulti = false, options, onChange, ...rest }: SelectFieldStatelessProps,
    ref: React.Ref<SelectRefValue>,
  ): JSX.Element => {
    const handleChange = (value: OnChangeValue<Option, typeof isMulti>) => {
      if (isMulti && Array.isArray(value)) {
        onChange?.(value.map((option) => option.value));
      }

      if (!isMulti && value && 'value' in value) {
        onChange?.(value.value);
      }
    };

    return (
      <div className={className}>
        <Select
          className={styles.select}
          {...rest}
          id={id}
          isClearable={isClearable}
          isMulti={isMulti}
          name={name}
          options={options}
          ref={ref}
          onChange={handleChange}
        />
      </div>
    );
  },
);

SelectFieldStateless.displayName = 'SelectFieldStateless';

export default SelectFieldStateless;
