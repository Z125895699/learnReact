import { List, Popover, Typography } from 'antd';

import React from 'react';
import { Project } from 'screens/project-list/list';
import { useAsync } from 'utils/use-async';

export const ProjectPopover = () => {
  const { isLoading, data: projects } = useAsync<Project[]>();

  console.log('projects:', projects);

  const pinnedProjects = projects?.filter((project) => project.pin);
  // console.log(pinnedProjects);

  const content = (
    <div>
      <Typography.Text type={'secondary'}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item>
            <List.Item.Meta title={project.name}></List.Item.Meta>
          </List.Item>
        ))}
      </List>
    </div>
  );

  return (
    <Popover content={content}>
      <span>项目</span>
    </Popover>
  );
};
