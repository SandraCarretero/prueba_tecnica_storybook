import styled from 'styled-components';
import { SPACING, COLORS } from '../../../stytles/design-tokens';

export const StyledFeaturePill = styled.div`
  display: grid;
  /* Define dos columnas de tamaño flexible e igual */
  grid-template-columns: 1fr 1fr;
  /* Espacio entre las columnas y las filas */
  gap: ${SPACING.xxl};
  /* Aseguramos que el contenedor no sea demasiado ancho si se usa fuera de un layout grande */
  max-width: 600px;
  margin: 0 auto; /* Para centrar la cuadrícula si está en un contenedor más grande */

  /* Media Query (Opcional, pero recomendado para móviles) */
  @media (max-width: 768px) {
    /* En pantallas más pequeñas, volvemos a una sola columna */
    grid-template-columns: 1fr;
  }

  /* Si solo hay un elemento, centrarlo */
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

// Contenedor del Icono (el círculo claro con borde)
export const ImgContainer = styled.div`
  /* Estilo del círculo contenedor */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${COLORS.background_secondary}; /* Fondo claro del círculo */
  border: 1px solid ${COLORS.border_default};
  margin-bottom: ${SPACING.md}; /* Separación del texto */
`;

export const StyledImg = styled.img`
  width: 110px;
  aspect-ratio: 1;
`;

// Contenedor del Título y Descripción
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SPACING.lg}; /* Espacio entre título y descripción */

  /* Estilo para la tipografía del título */
  & h4 {
    font-weight: 700;
  }

  /* Estilo para la tipografía de la descripción */
  & p {
    color: ${COLORS.text_secondary};
  }
`;
