import { Accordion } from './Accordion';

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple accordion items to be open at the same time'
    }
  }
};

const sampleItems = [
  {
    title: 'Description',
    subtitle: 'Monstera Decorative Artificial Plant',
    content: `Add freshness and color to your home with the Decorative Artificial Monstera Plant. Also known as Adam's Rib due to the slits featured on its PEVA leaves, a perfect detail that gives it a truly realistic look. It also consists of polyethylene trunks, a high-quality material that is very resistant and durable. This magnificent plant offers various advantages, including the ability not to wilt, so you will have no trouble keeping it looking beautiful. Ideal for your living room, entrance hall, or office, you will create a relaxed and pleasant atmosphere. \n\n We recommend cleaning it with a damp cloth and avoiding the use of chemical products. The plant comes with a black polypropylene pot. Planters that may appear in the image are not included. Due to its flexible material, the dimensions may vary. In some cases, the imagery, measurements and colours, as well as their names, are merely for reference. Everything perceived on the screen can be altered by many factors, which are: the screen calibration, the ambience lights, the viewing angle, etc. If the customer wants to know these details he should consult our technical service, as returns for technical reasons will be at his expense.`
  },
  {
    title: 'Measures',
    content:
      'Height: 60cm, Width: 25cm, Depth: 20cm. Perfect size for tabletop or floor placement. The compact dimensions make it ideal for small spaces while still providing a substantial visual impact.'
  },
  {
    title: 'Material',
    content:
      'Made from high-quality PEVA (Polyethylene Vinyl Acetate) leaves and polyethylene trunks. The materials are durable, UV-resistant, and designed to maintain their vibrant green color for years. The pot is made from black polypropylene for stability and longevity.'
  },
  {
    title: 'Features',
    content:
      'Realistic appearance with detailed leaf texture and natural coloring. Low maintenance - no watering required. Perfect for allergy sufferers. Includes drainage holes in the pot. Suitable for both indoor and outdoor use (in covered areas).'
  }
];


export const Default = {
  args: {
    items: sampleItems,
    allowMultiple: false
  }
};

export const Description = {
  args: {
    items: [sampleItems[0]],
    allowMultiple: false
  }
};

export const Measures = {
  args: {
    items: [sampleItems[1]],
    allowMultiple: false
  }
};

export const Material = {
  args: {
    items: [sampleItems[2]],
    allowMultiple: false
  }
};

export const Features = {
  args: {
    items: [sampleItems[3]],
    allowMultiple: false
  }
};
