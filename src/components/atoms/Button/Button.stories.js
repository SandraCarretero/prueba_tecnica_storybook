import { fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: { onClick: fn() }
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button'
  }
};

export const Selector = {
  args: {
    variant: 'selector',
    label: 'Selector Button'
  }
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button'
  }
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
