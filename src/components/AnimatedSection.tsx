import React, { useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}
export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  staggerChildren = false
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: delay,
        when: 'beforeChildren',
        staggerChildren: staggerChildren ? 0.07 : 0
      }
    }
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}>

      {children}
    </motion.div>);

}