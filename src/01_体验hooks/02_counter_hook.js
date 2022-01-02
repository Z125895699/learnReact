import React, { useState } from 'react';

export default function CounterHook() {
  /*
    Hook:useState. 本身是一个函数 来自react

    >参数和返回值
    >1参数:作用是给创建出来的状态一个默认值
    >2返回值:数组
     元素1:当前state的值
     元素2:更新state使用的一个函数
*/

  // const arr = useState(0);
  // const state = arr[0];
  // const setState = arr[1];

  //这种写法 count永远保留最新的值 只能在函数最外层调用hook 不要在循环中调用hook
  const [count, setcount] = useState(0);

  // console.log(state);

  //这样写会合并
  function handleBtnClick() {
    setcount(count + 10);
    setcount(count + 10);
    setcount(count + 10);
    setcount(count + 10);
  }

  //不会合并
  // function handleBtnClick() {
  //   setcount((prevCount) => prevCount + 10);
  //   setcount((prevCount) => prevCount + 10);
  //   setcount((prevCount) => prevCount + 10);
  //   setcount((prevCount) => prevCount + 10);
  // }

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={(e) => setcount(count + 1)}>+1</button>
      {/* 可以传入一个函数 */}
      <button onClick={(e) => setcount((prevCount) => prevCount + 10)}>
        +10
      </button>
      <button onClick={handleBtnClick}>+10</button>

      <button onClick={(e) => setcount(count - 1)}>-1</button>
    </div>
  );
}
