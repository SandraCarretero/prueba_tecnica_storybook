import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../atoms/Typography/Typography';
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionIcon
} from './accordion.styles';

export const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = index => {
    setOpenItems(prev => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => {
        const isOpen = openItems.has(index);

        return (
          <AccordionItem key={index}>
            <AccordionHeader
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleItem(index);
                }
              }}
            >
              <Typography variant="label">{item.title}</Typography>
              <AccordionIcon isOpen={isOpen}>
                {isOpen ? '-' : '+'}
              </AccordionIcon>
            </AccordionHeader>

            <AccordionContent isOpen={isOpen}>
              {item.subtitle && (
                <Typography variant="label" color="info">
                  {item.subtitle}
                </Typography>
              )}
              <Typography variant="text" color="info">
                {item.content.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < item.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      content: PropTypes.string.isRequired
    })
  ).isRequired,
  allowMultiple: PropTypes.bool
};
