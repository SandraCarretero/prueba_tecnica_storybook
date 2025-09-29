import { Image } from './Image';

const IMAGE_URL = 'https://picsum.photos/600/600';
export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export const Default = {
  args: {
    src: IMAGE_URL,
    alt: 'Una planta de Monstera artificial en maceta.',
    width: 300,
    height: 300,
    variant: 'default'
  },
};

export const AvatarCircle = {
  args: {
    src: IMAGE_URL,
    alt: 'Imagen de perfil del cliente',
    variant: 'circle',
  },
};
