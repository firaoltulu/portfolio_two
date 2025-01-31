import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
// material
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

//
import { varFadeInUp } from './variants';

// ----------------------------------------------------------------------

TextAnimate.propTypes = {
  text: PropTypes.string,
  variants: PropTypes.object,
  component: PropTypes.object,

  sx: PropTypes.object
};

export default function TextAnimate({ text, variants, component, sx, ...other }) {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    // triggerOnce: true
  });


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, variants]);


  return (
    <Typography
      initial="hidden"
      animate={controls}
      component={component}
      ref={ref}
      sx={{

        ...sx
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}

          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },

            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.1,
              },
            },
          }}>
          {letter === " " ? "\u00A0" : letter}

        </motion.span>
      ))}
    </Typography>
  );
}
