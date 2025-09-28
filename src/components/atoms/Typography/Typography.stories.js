import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export const Title = {
  args: {
    variant: 'title',
    children: 'Monstera Decorative'
  }
};

export const Subtitle = {
  args: {
    variant: 'subtitle',
    children: 'Why Choose Greenify?'
  }
};

export const Text = {
  args: {
    variant: 'text',
    children:
      'Explore our carefully curated  selection of sustainable products, each designed to reduce your  carbon footprint'
  }
};

export const Price = {
  args: {
    variant: 'price',
    children: '€120',
    color: 'secondary'
  }
};

export const Label = {
  args: {
    variant: 'label',
    children: 'Size'
  }
};

export const Advice = {
  args: {
    variant: 'advice',
    children: '⏰ The offer ends in 2 days'
  }
};

export const Info = {
  args: {
    variant: 'info',
    children:
      'In some cases, the imagery, measurements and colours, as well as their names, are merely for reference. Everything perceived on the screen can be altered by many factors, which are: the screen calibration, the ambience lights, the viewing angle, etc. If the customer wants to know these details he should consult our technical service, as returns for technical reasons will be at his expense.',
    color: 'grey'
  }
};

export const NavLink = {
  args: {
    variant: 'nav',
    children: 'E-shop',
    href: '#',
    textDecoration: 'none'
  }
};

export const Free = {
  args: {
    variant: 'free',
    children: 'FREE',
  }
};
