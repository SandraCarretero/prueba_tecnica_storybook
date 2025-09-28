import PropTypes from 'prop-types';
import { ProductVariantSelector } from '../ProductVariantSelector/ProductVariantSelector';
import { Button } from '../../atoms/Button/Button';
import {
  BlockContainer,
  InfoContainer,
  StyledDescriptionProduct,
  StyledRow,
  StyledRowSimple,
  StyledPriceProduct,
  StyledColumn,
  ContactLinkContainer
} from './productBuyBlock.styles';
import { Typography } from '../../atoms/Typography/Typography';
import { FaChevronRight } from 'react-icons/fa';

import phone from '../../../assets/phone.png';
import { useState } from 'react';

export const ProductBuyBlock = ({ initialColor, initialSize, price }) => {
  const [variant, setVariant] = useState({
    size: initialSize,
    color: initialColor,
    currentPrice: price // Inicializamos con el precio base/por defecto
  });

  // 💡 2. Función de callback para actualizar el estado
  const handleVariantChange = ({ size, color, price }) => {
    setVariant({
      size,
      color,
      currentPrice: price
    });
  };
  return (
    <BlockContainer>
      <ProductVariantSelector
        initialColor={initialColor}
        initialSize={initialSize}
        onVariantChange={handleVariantChange} 
      />

      <InfoContainer>
        <Typography variant="label">🪴 Your new plant</Typography>

        <StyledDescriptionProduct>
          <StyledRow>
            <Typography variant="text">Size</Typography>
            <Typography variant="text">{variant.size}</Typography>
          </StyledRow>
          <StyledRow>
            <Typography variant="text">Colour pot</Typography>
            <Typography variant="text">{variant.color.charAt(0).toUpperCase() + variant.color.slice(1)}</Typography>
          </StyledRow>
          <StyledRow>
            <StyledRowSimple>
              <Typography variant="text">Home delivery</Typography>
              <Typography variant="free" color="secondary">
                FREE
              </Typography>
            </StyledRowSimple>
            <Typography variant="text">24h</Typography>
            <Typography variant="info" color="grey">
              Shipping from Monday to Friday (excluding holidays)
            </Typography>
          </StyledRow>
        </StyledDescriptionProduct>
        <StyledPriceProduct>
          <StyledColumn>
            <Typography variant="label">Monstera Decorative</Typography>
            <Typography variant="info" color="grey">
              REF: 130834-270547
            </Typography>
            <Typography variant="advice">
              ⏰ The offer ends in 2 days
            </Typography>
          </StyledColumn>
          <StyledColumn>
            <Typography color="secondary" variant="price">
            {`€${variant.currentPrice}`}           
            </Typography>
          </StyledColumn>
        </StyledPriceProduct>
        <Button
          variant="primary"
          size="large" // Usamos el tamaño grande para que sea prominente
          style={{ flexGrow: 1 }} // Ocupa el espacio restante
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Next</span>
            {/* Ajusta el tamaño (size) y el color del icono si es necesario */}
            <FaChevronRight size={8} />
          </div>
        </Button>
        <ContactLinkContainer
          style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
        >
          <img
            src={phone}
            alt="Phone icon"
            style={{ width: '15px', height: 'auto', flexShrink: 0 }}
          />
          <Typography variant="nav" textDecoration="underline">
            Do you have any questions?
          </Typography>
        </ContactLinkContainer>
      </InfoContainer>
    </BlockContainer>
  );
};

ProductBuyBlock.propTypes = {
  initialColor: PropTypes.string,
  initialSize: PropTypes.string,
  price: PropTypes.number.isRequired
};

ProductBuyBlock.defaultProps = {
  price: 18.5
};
