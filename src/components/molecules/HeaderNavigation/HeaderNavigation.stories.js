import { HeaderNavigation } from './HeaderNavigation';

const CUSTOM_LINKS = ['Products', 'About Us', 'Contact'];

export default {
  title: 'Molecules/HeaderNavigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const DefaultHeader = {
  args: {
    links: ['Home', 'E-shop', 'How it works', 'Help'],
  },
};