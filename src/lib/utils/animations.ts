import { MotionProps } from 'framer-motion';

export const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeInLeft: MotionProps = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const hoverLift: MotionProps = {
  whileHover: { y: -5 },
  transition: { duration: 0.2 }
};