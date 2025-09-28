import PropTypes from 'prop-types';
import { Typography } from '../../atoms/Typography/Typography';
import {
  StyledFeaturePill,
  BlockContainer,
  ImgContainer,
  StyledImg,
  TextContent
} from './featurePill.styles';

export const FeaturePill = ({ items }) => {
  return (
    <StyledFeaturePill>
      {items.map((item, index) => {
        return (
          <BlockContainer key={index}>
            <ImgContainer>
              <StyledImg
                src={item.icon}
                alt={`${item.title} icon`}
                className="feature-main-icon"
              />
            </ImgContainer>

            <TextContent>
              <Typography
                variant="label"
                style={{ textAlign: 'center' }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="text"
                color="text"
                style={{ textAlign: 'center' }}
              >
                {item.description}
              </Typography>
            </TextContent>
          </BlockContainer>
        );
      })}
    </StyledFeaturePill>
  );
};

FeaturePill.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
};
