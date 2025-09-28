import styled from 'styled-components';
import { SPACING } from '../../../stytles/design-tokens';

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;

  border-radius: ${SPACING.xs};
  box-shadow: none;

  ${({ variant }) =>
    variant === 'circle'
      ? `border-radius: 50%; object-fit: cover; width: 100px; height: 100px;`
      : `border-radius: 0;`}
`;

export default StyledImage;
