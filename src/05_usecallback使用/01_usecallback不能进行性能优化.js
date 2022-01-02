import React, { useCallback, useState, memo } from 'react';

// useCallback在将一个组件中的函数 传递给子元素进行回调使用时 使用useCallback对函数进行处理

const HYButton = memo((props) => {
  console.log('HYButton重新渲染:' + props.title);
  return <button onClick={props.increment}>HYBuuton+1</button>;
});

export default function CllbackHookDemo01() {
  console.log('CllbackHookDemo01重新渲染');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = () => {
    setCount(count + 1);
    console.log('increment1执行');
  };

  //依赖值为空则不会更新  一直引用原先的count0
  const increment2 = useCallback(() => {
    setCount(count + 1);
    console.log('increment2执行');
  }, [count]);
  return (
    <div>
      <h2>CllbackHookDemo01:{count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <HYButton increment={increment1} title="Btn1"></HYButton>
      <HYButton increment={increment2} title="Btn2"></HYButton>

      <button
        onClick={(e) => {
          setShow(!show);
        }}
      >
        show切换
      </button>
    </div>
  );
}
