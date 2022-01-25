import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import { Project } from './list';

const { Option } = Select;
//定义User类型
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

//定义SearchPanel类型
interface SearchPanelProps {
  users: User[];
  param: Pick<Project, 'name' | 'personId'>;
  // param: {
  //   name: string;
  //   personId: string;
  // };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  // const [param, setParam] = useState({
  //   name: '',
  //   personId: '',
  // });

  // const [users, setUsers] = useState([]);
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch('').then(async (response) => {
  //     if (response.ok) {
  //       setList(await response.json());
  //     }
  //   });
  // }, [param]);

  //给input一个初始值
  const [val, setVal] = useState('');
  return (
    <Form layout={'inline'} style={{ marginBottom: '2rem' }}>
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name || val}
          onChange={(event) => {
            setParam({ ...param, name: event.target.value });
          }}
        />
      </Form.Item>
      <Form.Item>
        <Select
          style={{ width: 120 }}
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        >
          <Option value={Number('')}>负责人</Option>
          {users.map((user: User) => (
            <Option value={user.id} key={user.id + 1}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
