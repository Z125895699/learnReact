import React, { FormEvent } from 'react';
import { useAuth } from '../context/auth-context';
import { Button, Form, Input, message } from 'antd';

import { LongButton } from './index';
import { useAsync } from 'utils/use-async';

// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(param),
  //   }).then(async (response) => {
  //     if (response.ok) {
  //     }
  //   });
  // };

  const { login, user } = useAuth();

  const { run, isLoading } = useAsync();

  //最终还是FormEvent类型 可以查看d.ts文件
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   //阻止表单默认提交
  //   // console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
  //   e.preventDefault();
  //   const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
  //   //@ts-ignore
  //   login({ username, password });
  // };

  //因为login是异步的 所以需要async和await去等待异步执行完再执行error
  const handleSubmit = async (values: {
    username: string;
    passwoord: string;
  }) => {
    try {
      //@ts-ignore
      await run(login(values));
      message.success('登录成功');
    } catch (e) {
      message.destroy();
      //@ts-ignore
      message.error(e.message);
      // console.log(e.message);
    }
  };
  return (
    <Form onFinish={handleSubmit}>
      {/* {user ? <div>登录成功，用户名:{user?.name}</div> : null} */}
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="text" id={'username'} placeholder={'用户名'} />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input type="password" id={'password'} placeholder={'密码'} />
      </Form.Item>
      <LongButton type="primary" htmlType="submit" loading={isLoading}>
        登录
      </LongButton>
    </Form>
  );
};
