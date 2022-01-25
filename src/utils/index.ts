import { useEffect, useRef, useState } from 'react';

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
//如果为字面量false也会被删

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === '';

//在一个函数里  改变传入的对象是不好的
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //拿到对象的value值
    //@ts-ignore
    const value = result[key];
    if (isVoid(value)) {
      //@ts-ignore
      delete object[key];
    }
  });
  return result;
};

//抽象useEffect
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

//防抖处理  使用范型 传入什么值返回什么值  对搜索框做防抖处理
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    //每次在value变化以后 设置一个定时器
    const timeout = setTimeout(() => setdebouncedValue(value), delay);
    //每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

//document.title自定义hook
export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  //useRef持久化变量oldTitle
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

export const resetRoute = () => (window.location.href = window.location.origin);
