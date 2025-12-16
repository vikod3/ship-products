'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function LettersPullUp({
  text,
  className = '',
  wrapWords = false,
}: {
  text: string;
  className?: string;
  wrapWords?: boolean;
}) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  if (wrapWords) {
    const words = text.split(' ');
    let letterIndex = 0;
    
    return (
      <div className="flex flex-wrap" ref={ref}>
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="flex">
            {word.split('').map((char) => {
              const i = letterIndex++;
              return (
                <motion.span
                  key={i}
                  variants={pullupVariant}
                  initial="initial"
                  animate={isInView ? 'animate' : ''}
                  custom={i}
                  className={cn('tracking-tight', className)}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIdx < words.length - 1 && (
              <motion.span
                variants={pullupVariant}
                initial="initial"
                animate={isInView ? 'animate' : ''}
                custom={letterIndex++}
                className={cn('tracking-tight', className)}
              >
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn('tracking-tight', className)}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
