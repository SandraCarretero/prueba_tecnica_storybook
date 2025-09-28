import { HeaderNavigation } from './HeaderNavigation';

// Datos de prueba
const CUSTOM_LINKS = ['Products', 'About Us', 'Contact'];

export default {
  title: 'Molecules/HeaderNavigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // Usamos fullscreen para ver la barra completa
  },
};

export const DefaultHeader = {
  args: {
    links: ['Home', 'E-shop', 'How it works', 'Help'],
  },
};