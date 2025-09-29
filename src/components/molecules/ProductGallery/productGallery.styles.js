import styled from 'styled-components';
import { SPACING, COLORS } from '../../../stytles/design-tokens';

export const StyledProductGallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: ${SPACING.md};

  .main-image-container {
    flex-grow: 1;
    margin: 0 ${SPACING.sm};
  }
  .nav-arrow {
    background: none;
    border: none;
    cursor: pointer;
    padding: ${SPACING.sm};
    z-index: 10;
    & span {
      font-size: ${COLORS.gray_400};
      font-weight: 600;
    }
  }
`;

export const PaginationDotsContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: ${SPACING.xs};
  padding: ${SPACING.xs} 0;
  margin-top: ${SPACING.sm};
`;

export const PaginationIndicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  padding: 0;
  border: 1px solid ${COLORS.gray_750};
  background-color: ${({ isActive }) =>
    isActive ? COLORS.gray_750 : COLORS.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.gray_400};
  }
`;
