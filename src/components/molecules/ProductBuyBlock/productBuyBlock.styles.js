import styled from 'styled-components';
import { COLORS, SPACING } from '../../../stytles/design-tokens';

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xl}; /* Espacio grande para separar secciones */
  width: 100%;
  max-width: 384px;
  position: sticky;
  top: 20px; /* Distancia desde la parte superior cuando se vuelve sticky */
  align-self: flex-start; /* Asegura que se mantenga en su posición */
  z-index: 10; /* Asegura que esté por encima de otros elementos */
`;

export const InfoContainer = styled.div`
  background-color: ${COLORS.grey_card};
  border-radius: 16px;
  padding: ${SPACING.xl} ${SPACING.md};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${SPACING.xl};
`;

export const StyledDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRowSimple = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${SPACING.xxs};
`;

export const StyledRow = styled(StyledRowSimple)`
  padding-block: ${SPACING.xs};
  border-bottom: 1px solid ${COLORS.border_default};
`;

export const StyledPriceProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.xxs};
`;

export const ContactLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Espacio entre el icono y el texto */
  padding-top: 16px; /* Separación de los elementos de arriba */
  text-decoration: none; /* Asegura que no tenga el subrayado por defecto de <a> */

  /* Puedes añadir estilos al pasar el ratón para una mejor UX */
  &:hover {
    opacity: 0.85;
    text-decoration: none;
  }
`;
