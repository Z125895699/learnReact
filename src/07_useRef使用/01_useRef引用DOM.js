import React, { useRef } from 'react';

export default function RefHookDemo01() {
  const titleRef = useRef();
  // console.log(titleRef);

  const inputRef = useRef();

  function changDOM() {
    titleRef.current.innerHTML = 'Hello World';
    inputRef.current.focus();
  }
  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef}></input>
      <button onClick={(e) => changDOM()}>修改DOM</button>
    </div>
  );
}
