import styled from 'styled-components';
import {
  COLORS,
  SPACING,
  FONT,
  FONT_SIZE
} from '../../../stytles/design-tokens';

const StyledButton = styled.button`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  min-width: 60px;
  text-align: center;
  box-sizing: border-box;
  font-family: ${FONT.family};
  font-weight: ${FONT.weightBold};
  border-radius: ${SPACING.sm};
  transition: all 0.2s ease-in-out;

  ${({ size }) =>
    size === 'small'
      ? `padding: ${SPACING.xxs} ${SPACING.xs}; font-size: ${FONT_SIZE.sm}; border-radius: 4px; width: max-content;`
      : size === 'medium'
      ? `padding: ${SPACING.sm} ${SPACING.xl}; font-size: ${FONT_SIZE.md};`
      : `padding: ${SPACING.md} ${SPACING.xl}; font-size: ${FONT_SIZE.lg};`}

  ${({ variant }) =>
    variant === 'primary'
      ? `background-color: ${COLORS.primary}; border: none; color: ${COLORS.white};`
      : `background-color: transparent; border: 2px solid ${COLORS.border_default}; color: ${COLORS.black};`}

  ${({ isSelected, variant }) =>
    isSelected && variant !== 'primary'
      ? `border: 2px solid ${COLORS.border_selected};`
      : ''}

  &:focus-visible {
    outline: 2px solid #5c6773;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default StyledButton;
