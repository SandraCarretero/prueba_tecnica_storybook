import { FeaturePill } from './FeaturePill';

export default {
  title: 'Molecules/FeaturePill',
  component: FeaturePill,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

import icon1 from '../../../assets/icon1.png';
import icon2 from '../../../assets/icon2.png';
import icon3 from '../../../assets/icon3.png';
import icon4 from '../../../assets/icon4.png';

const ICON_MAP = {
  sustainable: icon1,
  eco: icon2,
  quality: icon3,
  packaging: icon4
};

const sampleItems = [
  {
    icon: ICON_MAP.sustainable,
    title: 'Sustainable Products',
    description:
      'Explore our carefully curated  selection of sustainable products,  each designed to reduce your  carbon footprint.'
  },
  {
    icon: ICON_MAP.eco,
    title: 'Eco-Friendly Choices',
    description:
      'Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices.'
  },
  {
    icon: ICON_MAP.quality,
    title: 'High-Quality Selection',
    description:
      'Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases.'
  },
  {
    icon: ICON_MAP.packaging,
    title: 'Sustainable Packaging',
    description:
      'Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.'
  }
];

export const Default = {
  args: {
    items: sampleItems,
  }
};

export const SustainableProducts = {
  args: {
    items: [sampleItems[0]],
  }
};

export const EcoFriendlyChoices = {
  args: {
    items: [sampleItems[1]],
  }
};

export const HighQualitySelection = {
  args: {
    items: [sampleItems[2]],
  }
};

export const SustainablePackaging = {
  args: {
    items: [sampleItems[3]],
  }
};
