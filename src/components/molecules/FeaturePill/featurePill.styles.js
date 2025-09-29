import styled from 'styled-components';
import { SPACING, COLORS } from '../../../stytles/design-tokens';

export const StyledFeaturePill = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${SPACING.xxl};
  max-width: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:has(> :only-child) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 50%;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${SPACING.md};
  gap: ${SPACING.lg};
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${COLORS.border_default};
  margin-bottom: ${SPACING.md};
`;

export const StyledImg = styled.img`
  width: 110px;
  aspect-ratio: 1;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.lg};

  & h4 {
    font-weight: 700;
  }

  & p {
    color: ${COLORS.text_secondary};
  }
`;
