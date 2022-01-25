import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Route, Routes, Navigate, useNavigate } from 'react-router';
import { KanbanScreen } from '../kanban';
import { EpicScreen } from '../epic';

export const ProjectScreen = () => {
  // const navigate = useNavigate();
  // //react v6的用法
  // useEffect(() => {
  //   console.log('run route to kanban');
  //   navigate('/kanban');
  // }, []);
  return (
    <div>
      <h1>ProjectScreen</h1>
      {/* 不用加/ */}
      <Link to={'kanban'}>看板</Link>
      <Link to={'epic'}>任务组</Link>
      <Routes>
        {/* 跳转的路径如果不是以/开头 则为相对路径 相对于其父级路径 */}
        <Route path={'kanban'} element={<KanbanScreen></KanbanScreen>}></Route>
        <Route path={'epic'} element={<EpicScreen></EpicScreen>}></Route>
        {/* 重定向 进入projects/:projectId/直接定向到看板 */}
        <Route
          path={''}
          element={<Navigate to={'kanban'} replace={true}></Navigate>}
        ></Route>
        {/* <Navigate to={window.location.pathname + '/kanban'}></Navigate> */}
      </Routes>
    </div>
  );
};
