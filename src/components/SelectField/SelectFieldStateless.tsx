import { forwardRef } from 'react';
import Select, { Props, ActionMeta, OnChangeValue, GroupBase, SelectInstance } from 'react-select';

import styles from './SelectFieldStateless.module.css';

export type Option = { label: string; value: string | number };
export type OptionGroup = GroupBase<Option>;

export type SelectFieldStatelessProps = Omit<Props<Option, boolean>, 'options'> & {
  className?: string;
  id: string;
  isClearable?: boolean;
  name: string;
  options: Option[];
};

export type SelectRefValue = SelectInstance<Option, boolean>;

const SelectFieldStateless = forwardRef(
  (
    { className, id, name, isClearable = false, isMulti = false, options, onChange, ...rest }: SelectFieldStatelessProps,
    ref: React.Ref<SelectRefValue>,
  ): JSX.Element => {
    const handleChange = (option: OnChangeValue<Option, boolean>, actionMeta: ActionMeta<Option>) => {
      onChange?.(option, actionMeta);
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
