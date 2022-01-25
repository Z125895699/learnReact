/* 返回页面url中 指定键的参数值*/

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();

  //使用useMemo解决循环渲染
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || '' };
        }, {} as { [key in K]: string }),
      [searchParams]
    ),
    setSearchParam,
  ] as const;
  // console.log(searchParams.get('name'));
};
