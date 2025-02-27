// material
import { styled } from '@mui/material/styles';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
//
import { TextAnimate } from '../../animate';
import { MHidden } from 'src/components/@material-extend';
// Hooks
import useNav from '../../../hooks/useNav';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
}));

// ----------------------------------------------------------------------

export default function LandingService() {
    const theme = useTheme();

    const { navOption, isLock, onScrollChange } = useNav();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && (isLock === false)) {
            onScrollChange(navOption[1]);
        } else {
        }
    }, [inView])



    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "center start"],
    });

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

    const opacityTab1 = useTransform(scrollYProgress, [0, 0.30, 0.32, 0.76], [1, 1, .35, .1]);
    const opacityTab2 = useTransform(scrollYProgress, [0.30, 0.33, 0.65, 0.67], [.35, 1, 1, 0.35]);
    const opacityTab3 = useTransform(scrollYProgress, [0.32, 0.67, 0.68, 0.78], [.1, 0.35, 1, 1]);

    const progressscroll1 = useTransform(scrollYProgress, [0, 0.32], ["0%", "100%"]);
    const progressscroll2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "100%"]);
    const progressscroll3 = useTransform(scrollYProgress, [0.67, 1], ["0%", "100%"]);

    const copyscroll1 = useTransform(scrollYProgress, [0, 0.32, 0.33], [1, 1, 0]);
    const copyscroll2 = useTransform(scrollYProgress, [0.32, 0.33, 0.66, 0.67], [0, 1, 1, 0]);
    const copyscroll3 = useTransform(scrollYProgress, [0.66, 0.67, 1], [0, 1, 1]);



    return (
        <RootStyle sx={{ color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec' }} id='service_section' ref={ref}>

            <Box ref={targetRef} className="process">

                <Box className="process_sticky">

                    <Box className="process_title">

                        <TextAnimate
                            text="My Services"
                            component={motion.h2}

                            sx={{
                                typography: 'h2',
                                'textTransform': 'uppercase',
                                'marginTop': '20px',
                                'marginBottom': '10px',
                                'fontFamily': 'Ade display, sans-serif',
                                'fontSize': '3.5em',
                                'fontWeight': 400,
                            }}
                        >

                        </TextAnimate>

                        <Box sx={{
                            // 'marginTop': '20px',
                            // 'marginBottom': '10px',
                            'fontFamily': 'sans-serif',
                            'fontSize': '1.2em',
                            'fontWeight': 100,
                            [theme.breakpoints.down('md')]: {
                                'fontSize': '3.5em',

                                'fontWeight': 300,

                            }
                        }}>I use a design-thinking methodology in my process
                            with great focus on users</Box>

                        {/* <TextAnimate
                            text="I use a design-thinking methodology in my process
                            with great focus on users"
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

                        </TextAnimate> */}


                    </Box>


                    <Box className="process_content">

                        <Box
                            className="process_tabs"
                        >

                            <motion.div
                                className="process_tab"
                                style={{ opacity: opacityTab1 }}
                            >
                                <Box className="font_light process_num">01.</Box>
                                <h3>Software Development</h3>
                            </motion.div>

                            <motion.div
                                className="process_tab tab_02"
                                style={{ opacity: opacityTab2 }}
                            >
                                <Box className="font_light process_num">02.</Box>
                                <h3>Website Development</h3>
                                <MHidden width='mdDown'>
                                    <motion.img
                                        src="https://cdn.prod.website-files.com/676ee13914d32411f64cb4bd/676ee13914d32411f64cb559_process_star.svg"
                                        loading="lazy" alt="" className="process_star"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                    />
                                </MHidden>
                            </motion.div>

                            <motion.div
                                className="process_tab tab-03"
                                style={{ opacity: opacityTab3 }}
                            >
                                <Box className="font_light process_num">03.</Box>
                                <h3>iOS &amp; Android App</h3>
                            </motion.div>


                        </Box>

                        <Box className="process_copy">

                            <div className="progress_copy">

                                <motion.div className="font_light pt_01"
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                        opacity: copyscroll1
                                    }}
                                >
                                    <strong>Complete digital solutions, from investigation to celebration.</strong>
                                    <br />
                                    I utilize the latest technologies
                                    and industry best practices to develop  <strong>scalable, secure, and user-friendly</strong> software applications.

                                </motion.div>

                                <motion.div className="font_light pt_02"
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                        opacity: copyscroll2
                                    }}
                                >
                                    <strong>Optimized for Search Engines, built for speed, Market standard.</strong>
                                    <br />
                                    I ensure a high-quality user interface and interactivity.
                                    I follow best practices in coding and optimization to deliver fast-loading and accessible websites.
                                </motion.div>

                                <motion.div className="font_light pt_03"
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                        opacity: copyscroll3
                                    }}
                                >
                                    <strong>
                                        Extend Functionality. Extend Access. Increase Engagement.
                                    </strong>
                                    <br />
                                    Integrate your web experience or create a standalone app with either mobile platform.
                                </motion.div>

                            </div>

                            <div className="process_progress">

                                <div className="progress_line" style={{
                                    backgroundColor: theme.palette.mode === 'light' ? '#371f0e33' : '#555252'
                                }}>

                                    <motion.div
                                        className="progress_fill_01"
                                        style={{
                                            width: progressscroll1,
                                            backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                                        }}
                                    ></motion.div>

                                </div>

                                <div className="progress_line" style={{
                                    backgroundColor: theme.palette.mode === 'light' ? '#371f0e33' : '#555252'
                                }}>

                                    <motion.div
                                        className="progress_fill_02"
                                        style={{
                                            width: progressscroll2,
                                            backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                                        }}
                                    ></motion.div>
                                </div>

                                <div className="progress_line" style={{
                                    backgroundColor: theme.palette.mode === 'light' ? '#371f0e33' : '#555252'
                                }}>

                                    <motion.div
                                        style={{
                                            width: progressscroll3,
                                            backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
                                        }}
                                        className="progress_fill_03"
                                    ></motion.div>
                                </div>

                            </div>

                        </Box>

                    </Box>

                </Box>

            </Box>

            <Box className="loop_scroll" sx={{
                borderTop: '1px solid #371f0e33',
                borderBottom: '1px solid #371f0e33',
                borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
            }}>

                <motion.div className="infinity_content" animate={animation} style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                }}>

                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>
                    <Box className="infinity_inside">
                        <h5>Software Development</h5>
                        <h5>•</h5>
                        <h5>Website Development</h5>
                        <h5>•</h5>
                        <h5>Backend Development</h5>
                        <h5>•</h5>
                        <h5>Frontend Development</h5>
                        <h5>•</h5>
                        <h5>iOS/Android App Development</h5>
                        <h5>•</h5>
                    </Box>

                </motion.div>

            </Box>



        </RootStyle >
    );
}
