import React from 'react';

import CounterHook from '../src/01_体验hooks/02_counter_hook';
// import MultihookState from './02_useState使用/01_多个状态的使用';
// import ComplexHookState from './02_useState使用/02_复杂状态的修改';
// import Home from './04_useReducer使用/01_useReducer使用';
// import CounterClass from './01_体验hooks/01_counter_class';
import Class from './03_useEffect使用/02_class使用';
import CllbackHookDemo01 from './05_usecallback使用/01_usecallback不能进行性能优化';

import Example from './03_useEffect使用/01_useEffect使用';

export default function App() {
  return (
    <div>
      {/* <MultihookState></MultihookState> */}
      {/* <CounterHook></CounterHook> */}
      {/* <ComplexHookState></ComplexHookState> */}
      {/* <Home></Home> */}
      {/* <CounterClass></CounterClass> */}
      {/* <Example></Example> */}
      {/* <Class></Class> */}
      <CllbackHookDemo01></CllbackHookDemo01>
    </div>
  );
}
