import styled from 'styled-components';
import {
  COLORS,
  SPACING,
  FONT,
  FONT_SIZE
} from '../../../stytles/design-tokens';

const StyledTypography = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5;

  font-family: ${FONT.familyBase};
  font-weight: ${FONT.weightRegular};

  ${({ color }) =>
    color === 'primary'
      ? `color: ${COLORS.black};`
      : color === 'secondary'
      ? `color: ${COLORS.primary};`
      : color === 'text'
      ? `color: ${COLORS.gray_750};`
      : color === 'info'
      ? `color: ${COLORS.gray_800};`
      : color === 'grey'
      ? `color: ${COLORS.gray_400};`
      : `color: ${COLORS.gray_700};`}

  text-decoration: ${({ textDecoration }) => textDecoration};

  ${({ variant }) =>
    variant === 'title'
      ? `font-size: ${FONT_SIZE.xxxl};`
      : variant === 'subtitle'
      ? `font-size: ${FONT_SIZE.xxl};`
      : variant === 'text'
      ? `font-size: ${FONT_SIZE.lg};`
      : variant === 'price'
      ? `font-size: ${FONT_SIZE.xl};
      font-weight: 700;`
      : variant === 'label'
      ? `font-size: ${FONT_SIZE.xl};
      font-weight: 600;`
      : variant === 'advice'
      ? `font-size: ${FONT_SIZE.xs};
        border-radius: 50px;
        padding-inline: ${SPACING.xxs};
        border: 1px solid ${COLORS.primary};
        width: max-content;`
      : variant === 'info'
      ? `font-size: ${FONT_SIZE.sm};`
      : variant === 'nav'
      ? `
         font-size: ${FONT_SIZE.lg};
         font-weight: 700;
         cursor: pointer;
         text-decoration: ${({ textDecoration }) => textDecoration};
         &:hover {
           color: ${COLORS.primary};
         }
       `
      : variant === 'free'
      ? `font-size: ${FONT_SIZE.sm};
      border-radius: 4px;
        padding-inline: ${SPACING.xxs};
        border: 1px solid ${COLORS.primary}`
      : `font-size: ${FONT_SIZE.md};`}
`;

export default StyledTypography;
