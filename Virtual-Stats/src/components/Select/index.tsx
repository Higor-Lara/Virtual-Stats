import React, { forwardRef, SelectHTMLAttributes } from 'react';

import { Selects } from './style';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, options, ...rest }, ref) => {
    return (
      <Selects>
        <label htmlFor={name}>{label}</label>
        <select defaultValue="M" id={name} {...rest} ref={ref}>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </Selects>
    );
  },
);

export default Select;
