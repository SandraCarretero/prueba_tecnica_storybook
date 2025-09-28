import PropTypes from 'prop-types';
import { Typography } from '../../atoms/Typography/Typography';
import LogoImage from '../../../assets/logo.png';
import ProfileImage from '../../../assets/not-loged.png';
import StyledHeaderNavigation, {
  Logo,
  PrimaryNav
} from './headerNavigation.styles';

const NAV_LINKS = ['Home', 'E-shop', 'How it works', 'Help'];

export const HeaderNavigation = ({
  links = NAV_LINKS,
  onLogoClick,
  onLoginClick
}) => {
  return (
    <StyledHeaderNavigation>
      <Logo onClick={onLogoClick}>
        <img src={LogoImage} alt="Greenify logo" style={{ width: 157 }} />
      </Logo>

      <PrimaryNav>
        {links.map(label => (
          <Typography variant="nav" key={label}>
            {label}
          </Typography>
        ))}
        <Typography href="#" variant="nav" onClick={onLoginClick}>
        <img src={ProfileImage} alt="User" style={{ height: 24  }} />
        </Typography>
      </PrimaryNav>
    </StyledHeaderNavigation>
  );
};

HeaderNavigation.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

