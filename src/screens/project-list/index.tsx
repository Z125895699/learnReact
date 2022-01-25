import React, { useState, useEffect } from 'react';

import { SearchPanel } from './search-panel';
import { List } from './list';

import * as auth from '../../auth-provider';

//qs库
import qs from 'qs';

import {
  cleanObject,
  useMount,
  useDebounce,
  useDocumentTitle,
} from '../../utils/index';
import { useHttp } from 'utils/http';
import styled from '@emotion/styled';
import { useAsync } from 'utils/use-async';

import { Project } from './list';
import { useUrlQueryParam } from 'utils/url';
//api设置
// const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  //定义name和负责人Id
  // const [, setParam] = useState({
  //   name: '',
  //   personId: '',
  // });

  const [param, setParam] = useUrlQueryParam(['name', 'personId']);

  const [users, setUsers] = useState([]);

  // const [list, setList] = useState([]);

  const debouncedParam = useDebounce(param, 200);

  const client = useHttp();
  const { run, isLoading, error, data: list } = useAsync<Project[]>();

  // console.log('list:', list);

  //axios和fetch的表现不一样   axios可以直接在返回状态不为2xx的时抛出异常
  useEffect(() => {
    run(client('projects', { data: cleanObject(debouncedParam) }));
    // client('projects', { data: cleanObject(debouncedParam) }).then(setList);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     // const res = await response.json();
    //     setList(await response.json());
    //     // console.log('list:', res);
    //     // setList(res);
    //   }
    // });
    // const token = auth.getToken();
    // console.log(token);
  }, [debouncedParam]);

  // console.log(useUrlQueryParam(['name']));

  //users
  useMount(() => {
    client('users').then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   // console.log(await response.json());
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });

  useDocumentTitle('项目列表', false);

  return (
    <Containner>
      <h1>项目列表</h1>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List loading={isLoading} dataSource={list || []} users={users}></List>
    </Containner>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Containner = styled.div`
  padding: 3.2rem;
`;
