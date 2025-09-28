import styled from 'styled-components';
import { SPACING, COLORS, FONT_SIZE } from '../../../stytles/design-tokens';

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xs};
  max-width: 100%;
`;

export const AccordionItem = styled.div`
  border-top: 1px solid ${COLORS.border_default};
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: ${SPACING.xxs} ${SPACING.sm};
  padding-bottom: ${SPACING.xl};
  gap: ${SPACING.sm};

  &:last-child{
  border-bottom: 1px solid ${COLORS.border_default};

  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.white};
  cursor: pointer;
  transition: background-color 0.2s ease;
  user-select: none;
  h3 {
    margin: 0;
    font-size: ${FONT_SIZE.lg};
    font-weight: 600;
    color: ${COLORS.gray_700};
  }
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-weight: 300;
  font-size: ${FONT_SIZE.xl};
  color: ${COLORS.gray_800};
  transition: transform 0.3s ease;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const AccordionContent = styled.div`
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xl};;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  background-color: ${COLORS.white};

`;
