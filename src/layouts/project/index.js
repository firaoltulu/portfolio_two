import { useState, useRef } from 'react';

import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';

// material
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';


// ----------------------------------------------------------------------

export default function ProjectLayout() {
    const theme = useTheme();
    const bodyRef = useRef(null);



    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <Box className="body">

            <MainNavbar bodyRef={bodyRef} />
            <div ref={bodyRef}>
                <Outlet />
            </div>

            <MainFooter />

        </Box>
    );
}
