import styled from 'styled-components';
import { SPACING } from '../../../stytles/design-tokens';

const StyledHeaderNavigation = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING.xl};
  background-color: white;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const PrimaryNav = styled.nav`
  display: flex;
  gap: ${SPACING.md};
`;

export const UtilityNav = styled.div`
  display: flex;
  gap: ${SPACING.sm};
`;

export default StyledHeaderNavigation;
