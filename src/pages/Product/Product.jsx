import { Image } from '../../components/atoms/Image/Image';
import { HeaderNavigation } from '../../components/molecules/HeaderNavigation/HeaderNavigation';
import { ProductGallery } from '../../components/molecules/ProductGallery/ProductGallery';
import Title from '../../components/molecules/Title/Title';
import { StyledMain, StyledContent } from './product.styles';

import imageMeasures from '../../assets/Monstera Decorative Artificial Plant, MEASURES.jpg';
import { Accordion } from '../../components/molecules/Accordion/Accordion';
import { Typography } from '../../components/atoms/Typography/Typography';
import { FeaturePill } from '../../components/molecules/FeaturePill/FeaturePill';
import { ProductBuyBlock } from '../../components/molecules/ProductBuyBlock/ProductBuyBlock';

const Product = () => {
  return (
    <>
      <HeaderNavigation />
      <StyledContent>
        <StyledMain>
          <div>
            <Title />
          </div>
          <ProductGallery
            galleryImages={[
              {
                alt: 'Monstera grande en maceta',
                src: '/src/assets/img-1.jpg'
              },
              {
                alt: 'Detalle de hojas de Monstera',
                src: '/src/assets/img-2.jpg'
              },
              {
                alt: 'Monstera en un salón',
                src: '/src/assets/img-3.jpg'
              }
            ]}
          />
          <Image
            alt="Monstera Decorative Artificial Plant, MEASURES"
            src={imageMeasures}
          />
          <Accordion
            items={[
              {
                content:
                  "Add freshness and color to your home with the Decorative Artificial Monstera Plant. Also known as Adam's Rib due to the slits featured on its PEVA leaves, a perfect detail that gives it a truly realistic look. It also consists of polyethylene trunks, a high-quality material that is very resistant and durable. This magnificent plant offers various advantages, including the ability not to wilt, so you will have no trouble keeping it looking beautiful. Ideal for your living room, entrance hall, or office, you will create a relaxed and pleasant atmosphere. \n\n We recommend cleaning it with a damp cloth and avoiding the use of chemical products. The plant comes with a black polypropylene pot. Planters that may appear in the image are not included. Due to its flexible material, the dimensions may vary. In some cases, the imagery, measurements and colours, as well as their names, are merely for reference. Everything perceived on the screen can be altered by many factors, which are: the screen calibration, the ambience lights, the viewing angle, etc. If the customer wants to know these details he should consult our technical service, as returns for technical reasons will be at his expense.",
                subtitle: 'Monstera Decorative Artificial Plant',
                title: 'Description'
              },
              {
                content:
                  'Height: 60cm, Width: 25cm, Depth: 20cm. Perfect size for tabletop or floor placement. The compact dimensions make it ideal for small spaces while still providing a substantial visual impact.',
                title: 'Measures'
              },
              {
                content:
                  'Made from high-quality PEVA (Polyethylene Vinyl Acetate) leaves and polyethylene trunks. The materials are durable, UV-resistant, and designed to maintain their vibrant green color for years. The pot is made from black polypropylene for stability and longevity.',
                title: 'Material'
              },
              {
                content:
                  'Realistic appearance with detailed leaf texture and natural coloring. Low maintenance - no watering required. Perfect for allergy sufferers. Includes drainage holes in the pot. Suitable for both indoor and outdoor use (in covered areas).',
                title: 'Features'
              }
            ]}
          />

          <Typography variant="subtitle" style={{ textAlign: 'center' }}>
            Why Choose Greenify?
          </Typography>
          <FeaturePill
            items={[
              {
                description:
                  'Explore our carefully curated  selection of sustainable products,  each designed to reduce your  carbon footprint.',
                icon: '/src/assets/icon1.png?t=1759054597125',
                title: 'Sustainable Products'
              },
              {
                description:
                  'Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices.',
                icon: '/src/assets/icon2.png?t=1759054597125',
                title: 'Eco-Friendly Choices'
              },
              {
                description:
                  'Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases.',
                icon: '/src/assets/icon3.png?t=1759054597125',
                title: 'High-Quality Selection'
              },
              {
                description:
                  'Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet.',
                icon: '/src/assets/icon4.png?t=1759054597125',
                title: 'Sustainable Packaging'
              }
            ]}
          />
        </StyledMain>
        <ProductBuyBlock initialColor="grey" initialSize="36cm" />
      </StyledContent>
    </>
  );
};

export default Product;
