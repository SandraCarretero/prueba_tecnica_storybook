import styled from 'styled-components';
import { COLORS, SPACING, COLORS_SWATCH } from '../../../stytles/design-tokens';

export const StyledBorderColorSwatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid ${COLORS.border_default}; 
  ${({ isSelected }) =>
    isSelected &&
    `
        border: 2px solid ${COLORS.border_selected}; 
    `};
`;

export const StyledColorSwatch = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  border: none;

  background-color: ${({ color }) =>
    COLORS_SWATCH[color] || COLORS_SWATCH.grey};

  box-shadow: 0 0 0 1px ${COLORS.border_default};
  transition: all 0.2s ease-in-out;
`;
