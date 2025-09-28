import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../../atoms/Image/Image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import { Typography } from '../../atoms/Typography/Typography';

import {
  StyledProductGallery,
  PaginationIndicator,
  PaginationDotsContainer 
} from './productGallery.styles';

export const ProductGallery = ({ galleryImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  const currentImageSrc = galleryImages[currentIndex].src;
  const currentImageAlt = galleryImages[currentIndex].alt;

  const handleNavClick = direction => {
    const totalImages = galleryImages.length;
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % totalImages;
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    setCurrentIndex(newIndex);
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <StyledProductGallery>
        
        <button
          className="nav-arrow prev"
          onClick={() => handleNavClick('prev')}
        >
          <FaChevronLeft size={20} color="gray" />
        </button>
        
        <div className="main-image-container">
          <Image
            src={currentImageSrc}
            alt={currentImageAlt}
            width="100%"
            height="auto"
          />
        </div>
        
        <button
          className="nav-arrow next"
          onClick={() => handleNavClick('next')}
        >
          <FaChevronRight size={20} color="gray" />
        </button>
      </StyledProductGallery>

      <PaginationDotsContainer>
        {galleryImages.map((_, index) => (
          <PaginationIndicator
            key={index}
            isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </PaginationDotsContainer>
    </div>
  );
};

ProductGallery.propTypes = {
  galleryImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

ProductGallery.defaultProps = {
  galleryImages: [
    { src: '../../../assets/img-1.jpg', alt: 'Monstera grande en maceta' },
    { src: '../../../assets/img-2.jpg', alt: 'Detalle de hojas de Monstera' },
    { src: '../../../assets/img-3.jpg', alt: 'Monstera en un salón' }
  ]
};