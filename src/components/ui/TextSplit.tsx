'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextSplitProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const TextSplit: React.FC<TextSplitProps> = ({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  stagger = 0.015,
  as: Component = 'span',
}) => {
  const words = text.split(' ');

  let totalCharIndex = 0;

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
            {letters.map((char, charIndex) => {
              const currentDelay = delay + totalCharIndex * stagger;
              totalCharIndex++;

              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 24, rotateX: -60 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    delay: currentDelay,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`char-span ${charClassName}`}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
};
