import { ProductBuyBlock } from './ProductBuyBlock';

export default {
  title: 'Molecules/ProductBuyBlock',
  component: ProductBuyBlock,
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
      options: ['24cm', '36cm'],
    },
    price: {
      control: 'number',
      min: 1,
      step: 0.01,
    }
  },
};

export const Default = {
  args: {
    initialColor: 'grey',
    initialSize: '36cm',
    price: 18.50,
  },
  parameters: {
    docs: {
      description: {
        story: 'Muestra el bloque completo de interacción de compra, incluyendo variantes, precio y botón de carrito.',
      },
    },
  },
};