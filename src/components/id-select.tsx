import { Select } from 'antd';

import React from 'react';

type SelectProps = React.ComponentProps<typeof Select>;

//IdSelect选择框

//把'value' | 'onChange' | 'options'删除留下Select自带的
interface IdSelectProps
  extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value: string | number | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

export const IdSellect = (props: IdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;

  return (
    <Select
      value={value}
      onChange={(value) => onChange(toNumber(value) || undefined)}
      {...restProps}
    >
      {defaultOptionName ? (
        <Select.Option value={0}>{defaultOptionName}</Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option value={option.id} key={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
