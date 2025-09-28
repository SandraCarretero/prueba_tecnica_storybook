import styled from 'styled-components';
import { SPACING } from '../../../stytles/design-tokens';

/* Contenedor principal de la molécula */
export const SelectorContainer = styled.div`
  margin-bottom: ${SPACING.xl};
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xl};
`;

/* Contenedor de los swatches de color */
export const SwatchGroup = styled.div`
  display: flex;
  gap: ${SPACING.sm};
  margin-top: ${SPACING.sm};
`;

export const SizeGroup = styled.div`
  display: flex;
  gap: ${SPACING.md};
  margin-top: ${SPACING.sm};
  width: 100%;
`;

/* Contenedor individual de talla + precio */
export const SizeOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACING.xs};
`;
