import { useEffect, useRef } from 'react';
// material
import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LandingService,
  LandingProjects,
  LandingTestimonials,
  LandingContact,
  LandingFooter
} from '../components/_external-pages/landing';
import "../components/_external-pages/landing/styles.css";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    mt: '12.5em',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  zIndex: 1,
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const theme = useTheme();

  const cursorRef = useRef(null);
  const cursorBigRef = useRef(null);
  const cursorBigBigRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      if (cursorBigRef.current) {
        cursorBigRef.current.style.left = `${clientX}px`;
        cursorBigRef.current.style.top = `${clientY}px`;
      }

      if (cursorBigBigRef.current) {
        cursorBigBigRef.current.style.left = `${clientX}px`;
        cursorBigBigRef.current.style.top = `${clientY}px`;
      }

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (

    <RootStyle title="Sup, I'm Firaol - Software Developer" id="move_top" ref={bodyRef} >

      <Box className="body">

        <div
          style={{
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
          }}
        >

          <div
            // className="cursor-wrapper"
            ref={cursorRef}
            style={{
              zIndex: 999,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              position: 'fixed',
              inset: '0%',
              [theme.breakpoints.down('md')]: {
                display: 'none'
              },
              PointerEvent: 'none',
              transform: 'translate(-50%, -50%)',
              left: '50vw',
              top: '50vh',
              transition: 'transform 0.1s ease-out',
            }}
          >

            <div
              style={{
                backgroundColor: theme.palette.mode === 'light'
                  ? "#371f0e"
                  : '#fcf2ec',
                zIndex: 9999, borderRadius: '10vw', justifyContent: 'center',
                alignItems: 'center', width: '1em', height: '1em', display: 'flex', position: 'relative',
              }}
            >

              <div
                style={{
                  fontSize: '1.1vw', fontWeight: 400, lineHeight: 1.15,
                  color: '#000', whiteSpace: 'nowrap', display: 'none',
                  [theme.breakpoints.down('xl')]: {
                    fontSize: '.9vw'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.75vw'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '4vw'
                  },
                }}
              >profile</div>

              <div
                style={{
                  fontSize: '1.1vw', fontWeight: 400, lineHeight: 1.15,
                  color: '#000', whiteSpace: 'nowrap', display: 'none',
                  [theme.breakpoints.down('xl')]: {
                    fontSize: '.9vw'
                  },
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.75vw'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '4vw'
                  },
                }}
              >drag or click</div>

            </div>

            <div className="w-embed">
            </div>

          </div>

          <div
            ref={cursorBigRef}
            style={{
              zIndex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
              display: 'flex', position: 'fixed', inset: '0%',
              [theme.breakpoints.down('md')]: {
                display: 'none'
              },
              PointerEvent: 'none',
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.95s ease-out',
              left: '50vw',
              top: '50vh',
              zIndex: 998,
            }}
          >

            <div>
            </div>

            <div
              style={{

                zIndex: 1, opacity: 0.2, border: '1px solid #371f0e',
                borderRadius: '100%', width: '30em', height: '30em', position: 'absolute',
                borderColor: theme.palette.mode === 'light'
                  ? "#371f0e"
                  : '#fcf2ec',
              }}
            ></div>

          </div>

          <div
            ref={cursorBigBigRef}
            style={{
              zIndex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              position: 'fixed',
              inset: '0%',
              [theme.breakpoints.down('md')]: {
                display: 'none'
              },
              PointerEvent: 'none',
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.95s ease-out',
              left: '50vw',
              top: '50vh',
              zIndex: 998,
            }}
          >

            <div>
            </div>

            <div
              style={{

                zIndex: 1, opacity: 0.2, border: '1px solid #371f0e',
                borderRadius: '100%', width: '35em', height: '35em', position: 'absolute',
                borderColor: theme.palette.mode === 'light'
                  ? "#371f0e"
                  : '#fcf2ec',
              }}
            ></div>

          </div>

        </div>

        <ContentStyle>

          <LandingHero bodyRef={bodyRef} />
          <LandingService />
          <LandingProjects />
          <LandingTestimonials />
          <LandingContact />
          <LandingFooter />

        </ContentStyle>

      </Box>

    </RootStyle >

  );

}


