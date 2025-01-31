import { Link as RouterLink } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
// material
import { styled, useTheme } from '@mui/material/styles';
import {
  Box, AppBar, Toolbar,
  Link
} from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import { PATH_PAGE } from 'src/routes/paths';


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 34;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
}));


// ----------------------------------------------------------------------

export default function MainNavbar({ bodyRef }) {
  const theme = useTheme();
  const isOffset = useOffSetTop(100);

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start start", "end end"],
  });

  const progressScroll = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);


  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        p: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: APP_BAR_MOBILE,

      }}
    >

      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'transparent',
          }),
          width: "100%",
          height: "100%",

        }}
      >

        <Box
          sx={
            {
              width: "100%",
              height: "100%",
              display: 'grid',
              placeItems: "center",
            }
          }>

          <Box className="process_progress_header" sx={{
            position: "absolute",
            top: 0,
            left: 0
          }}>

            <Box className="progress_line_header" style={{
              backgroundColor: theme.palette.mode === 'light' ? '#371f0e33' : '#555252'
            }}>

              <motion.div
                className="progress_fill_header"
                style={{
                  width: progressScroll,
                  backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                }}
              >
              </motion.div>

            </Box>
          </Box>

          <div className="navigation">

            <div className="nav_container">

              <Link className="logo w-inline-block" component={RouterLink} to={PATH_PAGE.landing}
                style={{
                  color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                }}>
                <h1 className="logo-text" style={{
                  color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                }}>
                  F.
                </h1>
              </Link>

            </div>

          </div>


        </Box>

      </ToolbarStyle>

    </AppBar >
  );

}
