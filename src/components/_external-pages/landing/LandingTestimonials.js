import { useEffect } from "react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Paper, Rating, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFadeInUp, MotionInView, TextAnimate } from '../../animate';
// Hooks
import useNav from '../../../hooks/useNav';
// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Gadisa H',
    rating: 5,
    dateCreate: 'April 19, 2023',
    content: `Excellent Work! Thanks a lot!`
  },
  {
    name: 'Habtamu T',
    rating: 4.1,
    dateCreate: 'January 1, 2021',
    content: `U have shown consistently exhibited a profound understanding of Next.js and its core principles From the initial project kick-off to the final deployment.`
  },
  {
    name: 'Eliya M',
    rating: 5,
    dateCreate: 'December 08, 2023',
    content: `On a personal note, an absolute pleasure to work with.`
  },
  {
    name: 'Endale C',
    rating: 4,
    dateCreate: 'August 26, 2022',
    content: `it is without reservation that I highly recommend you for any organization seeking a skilled and experienced BackEnd developer.`
  },
  {
    name: 'Bahiru H',
    rating: 5,
    dateCreate: 'October 29, 2023',
    content: `Throughout our collaboration, I have been thoroughly impressed by your diligence and professionalism. They consistently adhere to project deadlines and effectively communicate progress updates, keeping the team informed and involved throughout.Tnx u..`
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  // backgroundSize: 'cover',

  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
  }
}));

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;
  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        backgroundImage: theme.palette.mode === 'light'
          ? `linear-gradient(45deg, ${theme.palette.grey[100]} 0%, ${alpha(theme.palette.grey[0], 1)} 100%)`
          : `linear-gradient(45deg, ${theme.palette.grey[700]} 0%, ${alpha(theme.palette.grey[900], 1)} 100%)`,
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component="p" variant="caption" >
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

export default function LandingTestimonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { navOption, isLock, onScrollChange } = useNav();

  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView && (isLock === false)) {
      onScrollChange(navOption[3]);
    } else {
    }
  }, [inView])



  const animation = {
    x: ["0%", theme.direction === "rtl" ? "100%" : "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: ["circIn", "circOut"],
        type: "tween"
      },
    },
  };

  return (
    <Box ref={ref}>

      <RootStyle id='testimonials_section'>

        <Container maxWidth="lg" sx={{
          position: 'relative',
          top: 0,
          left: 0,
          height: '100%', color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
        }}>

          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ height: '100%' }}
          >

            <Grid item xs={10} md={4}>
              <Box sx={{ maxWidth: { md: 360 } }}>

                <TextAnimate
                  text="Testimonials"
                  component={motion.h3}

                  sx={{
                    typography: 'h3',
                    'textTransform': 'uppercase',
                    'marginTop': '20px',
                    'marginBottom': '10px',
                    'fontFamily': 'Ade display, sans-serif',
                    'fontSize': '3.5em',
                    'fontWeight': 400,
                  }}
                >

                </TextAnimate>

                <br />

                <TextAnimate
                  text="Who love my work"
                  component={motion.h6}

                  sx={{
                    typography: 'h6',
                    'textTransform': 'uppercase',
                    'marginTop': '20px',
                    'marginBottom': '10px',
                    'fontFamily': 'Ade display, sans-serif',
                    'fontSize': '3.5em',
                    'fontWeight': 400,
                  }}
                >

                </TextAnimate>


                <MotionInView variants={varFadeInUp}>
                  <Typography sx={{
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                  }}>
                    My goal is to create a product and service that you’re satisfied with and customer use it every day.
                  </Typography>
                </MotionInView>


              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              lg={6}
              sx={{
                right: { md: 24 },
                position: { md: 'absolute' }
              }}
            >
              <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                    <MotionInView key={testimonial.name} variants={
                      {
                        ...varFadeInUp,
                        animate: {
                          ...varFadeInUp.animate, transition: {
                            duration: index + 0.4,
                            ease: [0.43, 0.13, 0.93, 0.96]
                          }
                        },
                        exit: {
                          ...varFadeInUp.exit, transition: {
                            duration: index + 0.4,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }
                        }
                      }
                    }>
                      <TestimonialCard testimonial={testimonial} />
                    </MotionInView>
                  ))}
                </Grid>

                <Grid item xs={12} md={6}>
                  {TESTIMONIALS.slice(3, 6).map((testimonial, index) => (
                    <MotionInView key={testimonial.name} variants={
                      {
                        ...varFadeInUp,
                        animate: {
                          ...varFadeInUp.animate, transition: {
                            duration: index + 1.94,
                            ease: [0.43, 0.13, 0.93, 0.96]
                          }
                        },
                        exit: {
                          ...varFadeInUp.exit, transition: {
                            duration: index + 1.94,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }
                        }
                      }
                    }>
                      <TestimonialCard testimonial={testimonial} />
                    </MotionInView>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box sx={{ height: { xs: '1vh' } }} />

        </Container>

      </RootStyle>

      <Box sx={{ height: { xs: '5vh' } }} />

      <Box className="loop_scroll" sx={{
        borderTop: '1px solid #371f0e33',
        borderBottom: '1px solid #371f0e33',
        borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
      }}>

        <motion.div className="infinity_content" animate={animation}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
          }}
        >

          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>

          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
            <h5>For more information contact with me</h5>
            <h5>•</h5>
          </Box>

        </motion.div>

      </Box>

    </Box>
  );

}
