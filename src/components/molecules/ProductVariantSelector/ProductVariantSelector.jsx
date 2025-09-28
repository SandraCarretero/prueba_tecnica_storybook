import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ColorSwatch } from '../../atoms/ColorSwatch/ColorSwatch';
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
import {
  SelectorContainer,
  SwatchGroup,
  SizeGroup,
  SizeOption
} from './productVariantSelector.styles';

const AVAILABLE_COLORS = ['grey', 'blue', 'green', 'brown'];
const AVAILABLE_SIZES = [
  { size: '24cm', price: 47 },
  { size: '36cm', price: 120 }
];

export const ProductVariantSelector = ({ initialColor, initialSize, onVariantChange }) => {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);

  const currentSizeObject = AVAILABLE_SIZES.find(s => s.size === selectedSize);
  const currentPrice = currentSizeObject ? currentSizeObject.price : 0;

  useEffect(() => {
    if (onVariantChange) {
      onVariantChange({
        size: selectedSize,
        color: selectedColor,
        price: currentPrice,
      });
    }
  }, [selectedColor, selectedSize, currentPrice, onVariantChange]); 

  const handleColorChange = (colorKey) => {
    setSelectedColor(colorKey);
  };
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <SelectorContainer>
      {/* SECCIÓN DE TALLA */}
      <div>
        <Typography variant="label">
          Size
        </Typography>
        <SizeGroup>
          {AVAILABLE_SIZES.map(({ size, price }) => (
            <SizeOption key={size}>
              <Button
                key={size}
                variant="selector"
                size="large"
                isSelected={selectedSize === size}
                onClick={() => handleSizeChange(size)}
                label={size}
                price={`€${price}`}
              />
              <Typography color="secondary" variant="price" value={price} />{' '}
            </SizeOption>
          ))}
        </SizeGroup>
      </div>
      {/* SECCIÓN DE COLOR */}
      <div>
        <Typography variant="label">
          Colour of the pot
        </Typography>
        <Typography variant="text" color="info">
          {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
        </Typography>
        <SwatchGroup>
          {AVAILABLE_COLORS.map(colorKey => (
            <ColorSwatch
              key={colorKey}
              color={colorKey}
              isSelected={selectedColor === colorKey}
              onClick={() => handleColorChange(colorKey)}
            />
          ))}
        </SwatchGroup>
      </div>
    </SelectorContainer>
  );
};

ProductVariantSelector.propTypes = {
  initialColor: PropTypes.oneOf(AVAILABLE_COLORS),
  initialSize: PropTypes.oneOf(AVAILABLE_SIZES.map(s => s.size))
};

ProductVariantSelector.defaultProps = {
  initialColor: 'grey',
  initialSize: '24cm'
};
