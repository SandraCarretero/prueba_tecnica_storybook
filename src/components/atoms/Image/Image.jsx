import PropTypes from 'prop-types';
import StyledImage from './image.styles';

export const Image = ({ src, alt, variant, ...props }) => {
  return <StyledImage src={src} alt={alt} variant={variant} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'circle']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Image.defaultProps = {
  variant: 'default',
  width: '100%',
  height: 'auto'
};
