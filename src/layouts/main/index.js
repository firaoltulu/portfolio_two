import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
// material
import { Box } from '@mui/material';
// components
import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

export default function MainLayout() {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);



  return (
    <Box>

      <MainNavbar onOpenSettingSidebar={() => setOpensetting(true)} />

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}>
        <Outlet />
      </div>


    </Box>
  );
}
