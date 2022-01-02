import React, { useState } from 'react';

export default function MultihookState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(19);
  const [friends, setFriends] = useState(['kobe', 'james']);

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <h2>我的年龄:{age}</h2>
      <ul>
        {friends.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
