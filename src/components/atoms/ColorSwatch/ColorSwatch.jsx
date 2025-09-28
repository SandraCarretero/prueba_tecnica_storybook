import PropTypes from 'prop-types';
import {
  StyledColorSwatch,
  StyledBorderColorSwatch
} from './colorSwatch.styles';
('./colorSwatch.styles');

export const ColorSwatch = ({
  color = 'grey',
  isSelected = false,
  ...props
}) => {
  return (
    <StyledBorderColorSwatch isSelected={isSelected}>
      <StyledColorSwatch color={color} {...props} />
    </StyledBorderColorSwatch>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.oneOf(['grey', 'blue', 'green', 'brown']).isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
};

ColorSwatch.defaultProps = {
  color: 'grey',
  isSelected: false
};
