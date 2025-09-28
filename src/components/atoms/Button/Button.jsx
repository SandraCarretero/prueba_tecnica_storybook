import PropTypes from 'prop-types';
import StyledButton from './button.styles';
import { Typography } from '../Typography/Typography';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label,
  children,
  price,
  isSelected = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      isSelected={isSelected}
      {...props}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          lineHeight: 1,
          gap: '4px'
        }}
      >
        {label || children}
        {variant === 'selector' && price && (
          <Typography variant="price" color="secondary">
            {price}
          </Typography>
        )}
      </div>
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'selector']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  price: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Button'
};
