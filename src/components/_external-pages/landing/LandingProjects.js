import { Link as RouterLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
// material
import { styled } from '@mui/material/styles';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Box, IconButton, Link, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
//
import { MotionInView, varFadeInUp, varFadeInDown, TextAnimate } from '../../animate';
import { PATH_PAGE } from 'src/routes/paths';
// Hooks
import useNav from '../../../hooks/useNav';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
    paddingRight: 2,
    paddingBottom: 1,
    maxWidth: 160,
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
        maxWidth: 320,
        paddingRight: 4,
        borderRadius: 12,

    },
    '& img': {
        borderRadius: 8,
        [theme.breakpoints.up('sm')]: {
            borderRadius: 12
        }
    }
}));

const COMMON = {
    scaleX: 0.86,
    skewY: 8,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    opacity: 0
};

const variantScreenLeft = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '20%', translateY: -40, translateZ: 200, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const variantScreenCenter = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '50%', translateY: -100, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const variantScreenRight = {
    initial: COMMON,
    animate: { ...COMMON, translateX: "80%", translateY: -150, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

//

const variantScreenLeft_second = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '-20%', translateY: -40, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const variantScreenCenter_second = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '-50%', translateY: -120, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};

const variantScreenRight_second = {
    initial: COMMON,
    animate: { ...COMMON, translateX: "-80%", translateY: -170, opacity: 1 },
    exit: {
        x: 0, opacity: 1, transition: {
            duration: 0.94,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    }
};


// ----------------------------------------------------------------------

export default function LandingProjects() {
    const theme = useTheme();
    const targetRef = useRef(null);
    const isRTL = theme.direction === 'rtl';
    const isLight = theme.palette.mode === 'light';

    const { navOption, isLock, onScrollChange } = useNav();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && (isLock === false)) {
            onScrollChange(navOption[2]);
        } else {
        }
    }, [inView])

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
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

    const x1 = useTransform(scrollYProgress, [0, 0.10, 0.30], ["0%", "0%", "-100%"]);
    const x2 = useTransform(scrollYProgress, [0, 0.30, 0.48, 0.65], ["100%", "-100%", "-100%", "-200%"]);
    const x3 = useTransform(scrollYProgress, [0, 0.30, 0.65, 0.85, 1], ["200%", "100%", "-200%", "-200%", "-200%"]);

    const rightx1 = useTransform(scrollYProgress, [0, 0.13, 0.30], ["0%", "0%", "100%"]);
    const rightx2 = useTransform(scrollYProgress, [0, 0.30, 0.50, 0.65], ["-100%", "100%", "100%", "200%"]);
    const rightx3 = useTransform(scrollYProgress, [0, 0.30, 0.65, 0.85, 1], ["-200%", "-100%", "200%", "200%", "200%"]);

    const screenLeftAnimate = variantScreenLeft;
    const screenCenterAnimate = variantScreenCenter;
    const screenRightAnimate = variantScreenRight;


    return (
        <RootStyle sx={{ color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec' }} id='project_section' ref={ref}>

            <Box ref={targetRef} className="projects">

                <Box className="projects_stiky">

                    <Box className="project_title">

                        <TextAnimate
                            text="Projects"
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

                    </Box>

                    <Box className="project_slider">

                        <motion.div className="project_01"
                            style={{
                                x: theme.direction === "rtl" ? rightx1 : x1,
                                border: '1px solid #371f0e33',
                                borderBottom: "none",
                                borderTop: "none",
                                borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                            }}>

                            <Box className="project_image pr_01" sx={{
                                backgroundImage:
                                    theme.palette.mode === 'light'
                                        ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#434566", 1)},  ${alpha("#434566", 1)})`
                                        : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#48495b", 1)},  ${alpha("#3f4166", 1)})`
                            }}>

                                <Box className="project_image_custom">

                                    <Box component="img" src="/static/home/theme-color/grid.png" />

                                    <Box className="project_image_custom_stair">
                                        {[...Array(3)].map((_, index) => (
                                            <ScreenStyle
                                                key={index}
                                                threshold={0.72}
                                                variants={{
                                                    ...(index === 0 && (isRTL ? variantScreenLeft_second : screenLeftAnimate)),
                                                    ...(index === 1 && (isRTL ? variantScreenCenter_second : screenCenterAnimate)),
                                                    ...(index === 2 && (isRTL ? variantScreenRight_second : screenRightAnimate))
                                                }}
                                                transition={{ duration: 0.72, ease: 'easeOut' }}
                                                sx={{
                                                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                                                        isLight ? theme.palette.grey[600] : theme.palette.common.black,
                                                        0.48
                                                    )}`,
                                                    ...(index === 0 && {
                                                        zIndex: 3,
                                                        position: 'absolute',
                                                    }),
                                                    ...(index === 1 && { zIndex: 2, position: 'absolute', }),
                                                    ...(index === 2 && {
                                                        zIndex: 1,
                                                        position: 'absolute',
                                                        boxShadow: 'none'
                                                    })
                                                }}
                                            >

                                                <motion.div animate={{ y: index === 0 ? [0, -20, 0] : index === 1 ? [-10, 10, -10] : [-25, 5, -25] }} transition={{ duration: 8, repeat: Infinity }}>
                                                    <img
                                                        alt={`screen ${index + 1}`}
                                                        src={`/static/home/project/screen_${isLight ? 'light' : 'dark'}_${index + 1}.png`}
                                                    />
                                                </motion.div>

                                            </ScreenStyle>

                                        ))}
                                    </Box>


                                </Box>

                            </Box>

                            <Box className="project_info">

                                <Box className="project_copy">

                                    <Box className="font_light">
                                        Wede is a trading platform that contains many features
                                        like orderflow of a cryptocurrency pairs of a different platform.
                                        I was in charge of developing both backend and frontend of the platform.
                                        <br /><br />

                                        <Link variant="h6" component={RouterLink} to={PATH_PAGE.project_one}
                                            style={{
                                                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            }}
                                        >
                                            Read More
                                            <IconButton > <ArrowRightAltIcon fontSize='small'></ArrowRightAltIcon></IconButton>

                                        </Link>

                                    </Box>

                                </Box>

                                <Box className="project_num">
                                    <Box className="font_light no_wrap">
                                        <TextAnimate
                                            text={`01`}
                                            component={motion.h6}

                                            sx={{
                                                typography: 'h6',
                                                'textTransform': 'uppercase',
                                                'marginTop': '20px',
                                                'marginBottom': '10px',
                                                'fontFamily': 'Ade display, sans-serif',
                                                'fontSize': '3.5em',
                                                'fontWeight': 400,
                                                'color': theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                                            }}
                                        >

                                        </TextAnimate>01/ 03
                                    </Box>
                                </Box>

                            </Box>

                        </motion.div>

                        <motion.div className="project_02" style={{
                            x: theme.direction === "rtl" ? rightx2 : x2,
                            border: '1px solid #371f0e33',
                            borderBottom: "none",
                            borderTop: "none",
                            borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
                        }}>

                            <Box className="project_image pr_02" sx={{
                                backgroundImage:
                                    theme.palette.mode === 'light'
                                        ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#695b59", 1)},  ${alpha("#66443f", 1)})`
                                        : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#6c6564", 1)},  ${alpha("#66443f", 1)})`
                            }}>

                                <Box className="project_image_custom">
                                    <Box component="img" src="/static/home/theme-color/grid.png" />


                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInUp}>
                                            <img alt="screen" src={`/static/home/theme-color/screen-blue.png`} />
                                        </MotionInView>
                                    </Box>

                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInDown}>
                                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>
                                                <img alt="sidebar" src={`/static/home/theme-color/block1-blue.png`} />
                                            </motion.div>
                                        </MotionInView>
                                    </Box>

                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInDown}>
                                            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity }}>
                                                <img alt="sidebar" src={`/static/home/theme-color/block2-blue.png`} />
                                            </motion.div>
                                        </MotionInView>
                                    </Box>

                                    <Box sx={{ position: 'absolute', top: 0 }}>
                                        <MotionInView variants={varFadeInDown}>
                                            <motion.div animate={{ y: [-25, 5, -25] }} transition={{ duration: 10, repeat: Infinity }}>
                                                <img alt="sidebar" src={`/static/home/theme-color/sidebar-blue.png`} />
                                            </motion.div>
                                        </MotionInView>
                                    </Box>

                                </Box>

                            </Box>

                            <Box className="project_info">

                                <Box className="project_copy">

                                    <Box className="font_light">
                                        This is a solid and easy-to-use web-based software to manage content.
                                        With its intuitive dashboard and hand-crafted UI,
                                        helps every customer to easily manage every kind of content he/she needs.

                                        <br /><br />

                                        <Link variant="h6" component={RouterLink} to={PATH_PAGE.project_two}
                                            style={{
                                                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            }}
                                        >
                                            Read More
                                            <IconButton > <ArrowRightAltIcon fontSize='small'></ArrowRightAltIcon></IconButton>

                                        </Link>
                                    </Box>

                                </Box>

                                <Box className="project_num">
                                    <Box className="font_light no_wrap">02 / 03</Box>
                                </Box>

                            </Box>

                        </motion.div>

                        <motion.div className="project_03" style={{
                            x: theme.direction === "rtl" ? rightx3 : x3,
                            border: '1px solid #371f0e33',
                            borderBottom: "none",
                            borderTop: "none",

                            borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

                        }}>

                            <Box className="project_image pr_03" sx={{
                                backgroundImage:
                                    theme.palette.mode === 'light'
                                        ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#46304d", 1)},  ${alpha("#46304d", 1)})`
                                        : `linear-gradient(180deg, ${alpha("#373737", 0.1)}, ${alpha("#46304d", 1)},  ${alpha("#46304d", 1)})`
                            }}>

                                <Box className="project_image_custom">
                                    <Box component="img" src="/static/home/theme-color/grid.png" />

                                    <Box className="project_image_custom_stair">
                                        {[...Array(3)].map((_, index) => (
                                            <ScreenStyle
                                                key={index}
                                                threshold={0.72}
                                                variants={{
                                                    ...(index === 0 && (isRTL ? variantScreenLeft_second : screenLeftAnimate)),
                                                    ...(index === 1 && (isRTL ? variantScreenCenter_second : screenCenterAnimate)),
                                                    ...(index === 2 && (isRTL ? variantScreenRight_second : screenRightAnimate))
                                                }}
                                                transition={{ duration: 0.72, ease: 'easeOut' }}
                                                sx={{
                                                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                                                        isLight ? theme.palette.grey[600] : theme.palette.common.black,
                                                        0.48
                                                    )}`,
                                                    ...(index === 0 && {
                                                        zIndex: 3,
                                                        position: 'absolute',
                                                    }),
                                                    ...(index === 1 && { zIndex: 2, position: 'absolute', }),
                                                    ...(index === 2 && {
                                                        zIndex: 1,
                                                        position: 'absolute',
                                                        boxShadow: 'none'
                                                    })
                                                }}
                                            >

                                                <motion.div animate={{ y: index === 0 ? [0, -20, 0] : index === 1 ? [-10, 10, -10] : [-25, 5, -25] }} transition={{ duration: 8, repeat: Infinity }}>
                                                    <img
                                                        alt={`screen ${index + 1}`}
                                                        src={`/static/project/elearning/project_${index + 1}.png`}
                                                    />
                                                </motion.div>

                                            </ScreenStyle>

                                        ))}
                                    </Box>

                                </Box>

                            </Box>

                            <Box className="project_info">

                                <Box className="project_copy">

                                    <Box className="font_light">Utopia is a cutting-edge e-learning company dedicated to transforming
                                        education through technology. the platform includes an e-learning platform,
                                        a robust course management system, and a dynamic website.<br /><br />

                                        <Link variant="h6" component={RouterLink} to={PATH_PAGE.project_three}
                                            style={{
                                                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            }}
                                        >
                                            Read More
                                            <IconButton > <ArrowRightAltIcon fontSize='small'></ArrowRightAltIcon></IconButton>

                                        </Link>

                                    </Box>
                                </Box>

                                <Box className="project_num">
                                    <Box className="font_light no_wrap">03 / 03</Box>
                                </Box>

                            </Box>

                        </motion.div>

                    </Box>

                </Box>

            </Box>

            < Box className="loop_scroll" sx={{
                borderTop: '1px solid #371f0e33',
                borderBottom: '1px solid #371f0e33',
                borderColor: theme.palette.mode === 'light' ? '#371f0e33' : '#fcf2ec66'
            }
            }>

                <motion.div className="infinity_content" animate={animation} style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                }}>

                    <Box className="infinity_inside" sx={{
                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                        paddingTop: '1em',
                        paddingBottom: '1em'
                    }}>

                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            20&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > projects completed</Typography>
                        </Typography>
                        <h5>•</h5>
                        <Typography variant='h5' sx={{
                            fontFamily: 'sans-serif',
                            alignContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1em"

                        }}
                        >
                            5&#43;
                            <Typography variant='h5' sx={{
                                fontFamily: 'Ade display, sans-serif',
                            }}
                            > years of experience</Typography>
                        </Typography>
                        <h5>•</h5>





                    </Box>



                </motion.div>

            </Box >

        </RootStyle >
    );

}


