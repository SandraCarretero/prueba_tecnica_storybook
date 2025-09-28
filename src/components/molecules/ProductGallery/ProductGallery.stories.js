import { ProductGallery } from './ProductGallery';

import img1 from '../../../assets/img-1.jpg';
import img2 from '../../../assets/img-2.jpg';
import img3 from '../../../assets/img-3.jpg';

const MOCK_IMAGES = [
  { src: img1, alt: 'Monstera grande en maceta' },
  { src: img2, alt: 'Detalle de hojas de Monstera' },
  { src: img3, alt: 'Monstera en un salón' },
];

export default {
  title: 'Molecules/ProductGallery',
  component: ProductGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const DefaultGallery = {
  args: {
    galleryImages: MOCK_IMAGES,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra la galería de imágenes con la imagen principal y los puntos de paginación inferiores.',
      },
    },
  },
};