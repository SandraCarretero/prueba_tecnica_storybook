import { ProductVariantSelector } from './ProductVariantSelector';

export default {
  title: 'Molecules/ProductVariantSelector',
  component: ProductVariantSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    initialColor: {
      control: 'radio',
      options: ['grey', 'blue', 'green', 'brown'],
    },
    initialSize: {
      control: 'radio',
      options: ['24cm', '30cm', '40cm'],
    },
  },
};

export const DefaultSelection = {
  args: {
    initialColor: 'grey',
    initialSize: '24cm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra el selector con los valores por defecto: color gris y talla 24cm seleccionados.',
      },
    },
  },
};
