import { List, ListItemButton, ListItemIcon, ListItemText, styled } from '@material-ui/core';
import React, { Fragment } from 'react';
import { FiFolder, FiArchive, FiStar, FiPackage } from 'react-icons/fi';
import { ItemProject } from '../item';
import { SkeletonProject } from '../skeleton';
import { useProjects } from '../useProjects';

interface Props {}

const ContainerListProject = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'menu content empty';
  justify-items: center;
  /* "button count status"; */
  flex: 1;
  margin: 4rem 0rem;
`;

const WrapperFilterProject = styled(List)`
  max-width: 25rem;
  margin-right: 3rem;
  max-height: 29rem;
  border-radius: 4rem;
  padding: 2rem;
  background: #fff;
  width: 100%;
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const ContainerScrollProjectList = styled('div')`
  width: 100%;
  position: relative;
  grid-area: content;
`;

const WrapperScrollProjectList = styled('div')`
  position: absolute;
  inset: 0;
  overflow-y: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  scrollbar-width: 8px;
  scrollbar-color: #909090 #ccc;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #909090;
    border-radius: 6px;
    transition: all 0.3s;
    /* border: 3px solid #ccc; */
    :hover {
      background-color: #a0a0a0;
    }
  }
`;

export const ListProject: React.FC<Props> = () => {
  const { isLoading, isError, data, error } = useProjects();

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <ContainerListProject>
      <WrapperFilterProject>
        <ListItemButton>
          <ListItemIcon>
            <FiFolder />
          </ListItemIcon>
          <ListItemText primary="All" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiStar />
          </ListItemIcon>
          <ListItemText primary="Favorite" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiPackage />
          </ListItemIcon>
          <ListItemText primary="Collection" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FiArchive />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
      </WrapperFilterProject>
      <ContainerScrollProjectList>
        <WrapperScrollProjectList>
          {isLoading ? (
            <SkeletonProject />
          ) : (
            <Fragment>
              {data?.map(project => (
                <ItemProject key={project.id} project={project} />
              ))}
            </Fragment>
          )}
        </WrapperScrollProjectList>
      </ContainerScrollProjectList>
    </ContainerListProject>
  );
  // if (isLoading) return <div>loading</div>;
  // return <div>{data?.data?.map((item) => item.title)}</div>;
};