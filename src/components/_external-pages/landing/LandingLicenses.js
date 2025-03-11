import { useEffect } from "react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SendIcon from '@mui/icons-material/Send';

// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import {
  Box, Grid, Paper, Rating, Container, Typography, useMediaQuery,
  Divider, Card, CardContent, CardMedia, Button
} from '@mui/material';
//
import { varFadeInUp, MotionInView, TextAnimate } from '../../animate';
// Hooks
import useNav from '../../../hooks/useNav';

// ----------------------------------------------------------------------

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

export default function LandingLicenses() {
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

          <Grid item xs={12} sx={{
            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
            padding: "1em",
            // paddingTop: "5em",
          }}>

            <Grid container direction="row" rowSpacing={0} sx={{ padding: "1em", }}>

              <Grid item xs={12} sx={{ marginBottom: "5em" }}>

                <TextAnimate
                  text="Licenses & certifications"
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
