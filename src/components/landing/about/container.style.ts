import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const ContainerAbout = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

ContainerAbout.defaultProps = { maxWidth: 'lg' };
