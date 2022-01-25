import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/auth-context';
import styled from '@emotion/styled';

import { ProjectListScreen } from './screens/project-list';
import { Row } from './components/lib';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { Navigate, Route, Routes, useNavigate } from 'react-router';

// import { BrowserRouter } from 'react-router-dom';
import { ProjectScreen } from 'screens/project';
import { resetRoute } from 'utils';
import { ProjectModal } from 'screens/project-list/project-modal';
import { ProjectPopover } from 'components/project-popover';

export default function AuthenticatedApp() {
  // const { logout, user } = useAuth();

  // const navigate = useNavigate();

  // //react v6的用法
  // useEffect(() => {
  //   console.log('run route to projects');
  //   navigate('/projects');
  // }, []);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <Container>
      <PageHeader></PageHeader>
      <Button onClick={() => setProjectModalOpen(true)}>打开</Button>
      <Main>
        {/* 该组件已将交给路由组件渲染渲染了 所以删除 */}
        {/* <ProjectListScreen></ProjectListScreen> */}
        <Routes>
          <Route
            path={'projects'}
            element={<ProjectListScreen></ProjectListScreen>}
          ></Route>
          <Route
            path={'projects/:projectId/*'}
            element={<ProjectScreen></ProjectScreen>}
          ></Route>
          {/* 匹配/去projects */}
          <Route
            path={'/'}
            element={<Navigate to={'/projects'}></Navigate>}
          ></Route>
          {/* <Navigate to={'/projects'}></Navigate> */}
        </Routes>
      </Main>
      <ProjectModal
        projectModalOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      ></ProjectModal>
    </Container>
  );
}

// PageHeader组件
const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type={'link'} onClick={resetRoute} style={{ padding: 0 }}>
          <SoftwareLogo
            width={'18rem'}
            color={'rgb(38,132,255)'}
          ></SoftwareLogo>
        </Button>
        <ProjectPopover />
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={'logout'}>
                <a onClick={logout}>退出</a>
              </Menu.Item>
            </Menu>
          }
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hi,{user?.name} <DownOutlined />
          </a>
        </Dropdown>
        {/* <button onClick={logout}>退出</button> */}
      </HeaderRight>
    </Header>
  );
};

// const HeaderItem = styled.h3`
//   margin-right: 3rem;
// `;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  /* grid-template-columns: 20rem 1fr 20rem; */
  /* grid-template-areas:
    'header header header'
    'nav main  aside'
    'footer footer footer'; */
  /* grid-gap: 10rem; */
  height: 100vh;
`;

//grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
  /* grid-area: header; */
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  /* grid-area: main; */
`;
// const Nav = styled.nav`
//   grid-area: nav;
// `;
// const Aside = styled.aside`
//   grid-area: aside;
// `;
// const Footer = styled.footer`
//   grid-area: footer;
// `;

// const PageHeader = styled.header`
//   background-color: gray;
//   height: 6rem;
// `;

// const Main = styled.main`
//   height: calc(100vh-6rem);
// `;
