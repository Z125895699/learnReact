import React, { PureComponent } from 'react';

export default class CounterClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>你点击了{count}次</h2>
        {/* 第一种写法 */}
        <button onClick={this.countAdd.bind(this)}>Click me</button>
        {/* 第二种写法 */}
        <button
          onClick={(e) => {
            this.countAdd();
          }}
        >
          Click me
        </button>
      </div>
    );
  }

  countAdd() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}
