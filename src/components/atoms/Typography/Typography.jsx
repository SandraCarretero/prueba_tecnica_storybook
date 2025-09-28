import PropTypes from 'prop-types';
import StyledTypography from './typography.styles';

export const Typography = ({
  variant = 'body',
  color = 'primary',
  textDecoration = 'none',
  children,
  ...props
}) => {
  return (
    <StyledTypography
      as={variant === 'nav' ? 'a' : 'p'}
      variant={variant}
      color={color}
      textDecoration={textDecoration}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'title',
    'subtitle',
    'text',
    'price',
    'label',
    'advice',
    'info',
    'nav',
    'free'
  ]).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'text', 'info', 'grey']),
  textDecoration: PropTypes.oneOf(['none', 'underline']),
  children: PropTypes.node.isRequired
};

Typography.defaultProps = {
  color: 'title'
};
