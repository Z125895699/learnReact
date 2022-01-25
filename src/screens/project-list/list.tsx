import { Table, TableProps } from 'antd';
import { Pin } from 'components/pin';
import dayjs from 'dayjs';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { User } from './search-panel';

//定义Project类型
export interface Project {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
  created: number;
}

//定义List组件类型
interface ListProps extends TableProps<Project> {
  // list: Project[];
  users: User[];
}

export const List = ({ users, ...props }: ListProps) => {
  return (
    // 要加rowKey不然会报警告
    <Table
      rowKey={'id'}
      pagination={false}
      columns={[
        {
          title: <Pin checked={true} disabled={true}></Pin>,
        },
        {
          title: '名称',
          key: 'id',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return <Link to={String(project.id)}>{project.name} </Link>;
          },
        },
        {
          title: '部门',
          key: 'ownerId',
          dataIndex: 'organization',
        },
        {
          title: '负责人',
          key: 'id',
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            );
          },
        },
        {
          title: '创建时间',
          key: 'created',
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
              </span>
            );
          },
        },
      ]}
      {...props}
    ></Table>
  );
};
