import React, { useState } from 'react';

export default function ComplexHookState() {
  const [friends, setFriends] = useState(['kobe', 'james']);

  return (
    <div>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button
        onClick={(e) => {
          setFriends([...friends, 'tom']);
        }}
      >
        添加好友
      </button>
    </div>
  );
}
