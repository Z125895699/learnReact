import React, { FormEvent } from 'react';
import { useAuth } from '../context/auth-context';
import { Button, Form, Input, message } from 'antd';

import { LongButton } from './index';
import Password from 'antd/lib/input/Password';
// const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {
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

  const { register, user } = useAuth();

  //最终还是FormEvent类型 可以查看d.ts文件
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   //阻止表单默认提交
  //   // console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
  //   e.preventDefault();
  //   const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
  //   const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
  //   //@ts-ignore
  //   register({ username, password });
  // };
  //确认密码不参与服务器 可以单独拿出来
  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    passwoord: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.passwoord) {
      message.error('请输入两次相同的密码');
      return;
    }
    try {
      //@ts-ignore
      await register(values);
      message.success('注册成功');
    } catch (e) {
      //@ts-ignore
      message.error(e.message);
      // console.log(e.message);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input type="text" id={'username'} placeholder={'用户名'} />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input type="password" id={'password'} placeholder={'密码'} />
      </Form.Item>
      <Form.Item
        name={'cpassword'}
        rules={[{ required: true, message: '请确认密码' }]}
      >
        <Input type="password" id={'cpassword'} placeholder={'确认密码'} />
      </Form.Item>
      <LongButton type="primary" htmlType="submit">
        注册
      </LongButton>
    </Form>
  );
};
