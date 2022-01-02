import React, { useCallback, useState } from 'react';

export default function CllbackHookDemo01() {
  const [count, setCount] = useState(0);

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
      <h2>{count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}
