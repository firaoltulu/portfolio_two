import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { findIndex } from 'lodash';
// material
import { Box, Card, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
// components
import Page from '../components/Page';
import "../components/_external-pages/landing/styles.css";
import { MotionInView, varFadeInUp, varFadeInLeft } from 'src/components/animate';
// Utils
import LightboxModal from 'src/components/LightboxModal';
// 
import materialuiicon from "../assets/project/materialuiicon.png";
import reacticon from "../assets/project/reacticon.png";
import nodejsicon from "../assets/project/nodejsicon.png";
import pythonicon from "../assets/project/pythonicon.png";
import mongodbicon from "../assets/project/mongodbicon.png";
import mysqlicon from "../assets/project/mysqlicon.png";
import { PATH_PAGE } from 'src/routes/paths';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
}));

const ContentStyle = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    zIndex: 1,
    p: "10em",
    width: '100%'
}));
// ----------------------------------------------------------------------

const imagesLightbox_two = [
    {
        "AddedDate": "2024-09-05T07:25:46.662Z",
        "ImageID": "67d0e080-2873-5950-9357-dc237275801c",
        "ModifiedDate": [],
        "Url": '/static/project/dashboard/project_one.png'
    },
    {
        "AddedDate": "2024-09-05T07:25:46.662Z",
        "ImageID": "67d0e080-2873-5950-9357-dc237275801c",
        "ModifiedDate": [],
        "Url": '/static/project/dashboard/project_two.png'
    },
    {
        "AddedDate": "2024-09-05T07:25:46.662Z",
        "ImageID": "67d0e080-2873-5950-9357-dc237275801c",
        "ModifiedDate": [],
        "Url": '/static/project/dashboard/project_three.png'
    },
    {
        "AddedDate": "2024-09-05T07:25:46.662Z",
        "ImageID": "67d0e080-2873-5950-9357-dc237275801c",
        "ModifiedDate": [],
        "Url": '/static/project/dashboard/project_four.png'
    },
    {
        "AddedDate": "2024-09-05T07:25:46.662Z",
        "ImageID": "67d0e080-2873-5950-9357-dc237275801c",
        "ModifiedDate": [],
        "Url": '/static/project/dashboard/project_five.png'
    },
];

// ----------------------------------------------------------------------

export default function ProjectTwo() {
    const theme = useTheme();
    const navigate = useNavigate();

    const cursorRef = useRef(null);
    const cursorBigRef = useRef(null);
    const cursorBigBigRef = useRef(null);
    const bodyRef = useRef(null);

    const [openLightbox, setOpenLightbox] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedArray, setSelectedArray] = useState([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;

            // Update the small cursor position
            if (cursorRef.current) {
                cursorRef.current.style.left = `${clientX}px`;
                cursorRef.current.style.top = `${clientY}px`;
            }

            // Update the big cursor position
            if (cursorBigRef.current) {
                cursorBigRef.current.style.left = `${clientX}px`;
                cursorBigRef.current.style.top = `${clientY}px`;
            }

            if (cursorBigBigRef.current) {
                cursorBigBigRef.current.style.left = `${clientX}px`;
                cursorBigBigRef.current.style.top = `${clientY}px`;
            }

        };

        // Add the mousemove event listener
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Cleanup event listener
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleOpenLightbox = (url, array = []) => {
        setSelectedArray(array);
        const selectedImage = findIndex(array, (index) => index.Url === url);
        setOpenLightbox(true);
        setSelectedImage(selectedImage);
    };

    const onClickPrevious = () => {
        navigate(PATH_PAGE.project_one)
    };

    const onClickNext = () => {
        navigate(PATH_PAGE.project_three)
    };

    return (

        <RootStyle title="Sup, I'm Firaol - Software Developer" ref={bodyRef} id="move_top_project">

            <Box className="body">

                <Box
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

                    <Box
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

                        <Box
                            style={{
                                backgroundColor: theme.palette.mode === 'light'
                                    ? "#f9a86f"
                                    : '#fcf2ec',
                                zIndex: 9999, borderRadius: '10vw', justifyContent: 'center',
                                alignItems: 'center', width: '1em', height: '1em', display: 'flex', position: 'relative',
                            }}
                        >

                            <Box
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
                            >profile</Box>

                            <Box
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
                            >drag or click</Box>

                        </Box>

                        <Box className="w-embed">
                        </Box>

                    </Box>

                    <Box
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

                        <Box>
                        </Box>

                        <Box
                            style={{

                                zIndex: 1, opacity: 0.2, border: '1px solid #371f0e',
                                borderRadius: '100%', width: '30em', height: '30em', position: 'absolute',
                                borderColor: theme.palette.mode === 'light'
                                    ? "#371f0e"
                                    : '#fcf2ec',
                            }}
                        ></Box>

                    </Box>

                    <Box
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

                        <Box>
                        </Box>

                        <Box
                            style={{

                                zIndex: 1, opacity: 0.2, border: '1px solid #371f0e',
                                borderRadius: '100%', width: '35em', height: '35em', position: 'absolute',
                                borderColor: theme.palette.mode === 'light'
                                    ? "#371f0e"
                                    : '#fcf2ec',
                            }}
                        ></Box>

                    </Box>

                </Box>

                <ContentStyle>

                    <Box className="top_wrap" sx={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                        p: "8em"
                    }}>

                        <Box className="container">

                            <Box className="title_wrap" >

                                <h1
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
                                    }}
                                >
                                    The next generation management system.
                                </h1>


                            </Box>

                            <Box className="g03_container">

                                <Box className="g03_gallery_column">

                                    <MotionInView variants={varFadeInLeft}>

                                        <Box className="w-dyn-list">

                                            <Box className="w-dyn-items">

                                                <Box className="g03_image_wrap w-dyn-item">

                                                    <Box className="g03_image">

                                                        <Card
                                                            className="g03_image_link w-inline-block w-lightbox"
                                                            align={"left"}
                                                            elevation={12}
                                                            sx={{
                                                                position: "relative",
                                                                padding: "0em",
                                                                borderRadius: '0em',
                                                                backgroundImage: "radial-gradient(circle, rgb(220, 236, 4) 0%, rgba(252, 248, 0, 0.94) 100%)",

                                                            }}>

                                                            <motion.div
                                                                whileHover={{ scale: 1.1, }}
                                                                className="gallery_cover"
                                                                align={"center"}
                                                                elevation={2}
                                                                style={{
                                                                    opacity: 1,
                                                                    borderRadius: '0em',
                                                                    alignContent: "center",
                                                                    padding: "6em",
                                                                }}>
                                                                <Box component="img" src={imagesLightbox_two[0].Url} />

                                                            </motion.div>

                                                            <motion.div
                                                                onClick={() => handleOpenLightbox(imagesLightbox_two[0].Url, imagesLightbox_two)}
                                                                whileHover={{ opacity: 0.9 }}
                                                                align={"center"}
                                                                elevation={2}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    zIndex: 999,
                                                                    opacity: 0,
                                                                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)",
                                                                    alignItems: 'center',
                                                                    alignContent: 'center',
                                                                    p: "2em"
                                                                }}>


                                                                <IconButton onClick={() => handleOpenLightbox(imagesLightbox_two[0].Url, imagesLightbox_two)}>
                                                                    <FullscreenIcon fontSize='large' sx={{
                                                                        color: '#ffffff'
                                                                    }} />
                                                                </IconButton>

                                                            </motion.div>

                                                        </Card>

                                                    </Box>

                                                </Box>

                                            </Box>

                                        </Box>
                                    </MotionInView>

                                    <MotionInView variants={varFadeInLeft}>

                                        <Box className="w-dyn-list">
                                            <Box role="list" className="w-dyn-items">
                                                <Box role="listitem" className="g03_image_wrap w-dyn-item">
                                                    <Box className="g03_image">

                                                        <Card
                                                            className="g03_image_link w-inline-block w-lightbox"
                                                            align={"left"}
                                                            elevation={12}
                                                            sx={{
                                                                position: "relative",
                                                                padding: "0em",
                                                                borderRadius: '0em',
                                                                backgroundImage: "radial-gradient(circle, rgba(0, 255, 21, 0.9) 0%, rgba(21, 231, 91, 0.7) 100%)",

                                                            }}>

                                                            <motion.div
                                                                whileHover={{ scale: 1.1, }}
                                                                className="gallery_cover"
                                                                align={"center"}
                                                                elevation={2}
                                                                style={{
                                                                    opacity: 1,
                                                                    borderRadius: '0em',
                                                                    alignContent: "center",
                                                                    padding: "6em",
                                                                }}>
                                                                <Box component="img" src={imagesLightbox_two[1].Url} />

                                                            </motion.div>

                                                            <motion.div
                                                                onClick={() => handleOpenLightbox(imagesLightbox_two[1].Url, imagesLightbox_two)}
                                                                whileHover={{ opacity: 0.9 }}
                                                                align={"center"}
                                                                elevation={2}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    zIndex: 999,
                                                                    opacity: 0,
                                                                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)",
                                                                    alignItems: 'center',
                                                                    alignContent: 'center',
                                                                    p: "2em"
                                                                }}>

                                                                <IconButton onClick={() => handleOpenLightbox(imagesLightbox_two[1].Url, imagesLightbox_two)}>
                                                                    <FullscreenIcon fontSize='large' sx={{
                                                                        color: '#ffffff'
                                                                    }} />
                                                                </IconButton>

                                                            </motion.div>

                                                        </Card>

                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </MotionInView>

                                </Box>

                                <Box className="g03_gallery_column">

                                    <Box className="w-dyn-list">
                                        <Box role="list" className="w-dyn-items">
                                            <Box role="listitem" className="g03_image_wrap_02 w-dyn-item">
                                                <Box className="g03_image_02">

                                                    <Card
                                                        className="g03_image_link w-inline-block w-lightbox"
                                                        align={"left"}
                                                        elevation={12}
                                                        sx={{
                                                            position: "relative",
                                                            padding: "0em",
                                                            borderRadius: '0em',
                                                            backgroundImage: "radial-gradient(circle, rgba(253, 0, 63, 0.8) 0%, rgb(247, 11, 11) 100%)",

                                                        }}>

                                                        <motion.div
                                                            whileHover={{ scale: 1.1, }}
                                                            className="gallery_cover"
                                                            align={"center"}
                                                            elevation={2}
                                                            style={{
                                                                opacity: 1,
                                                                borderRadius: '0em',
                                                                alignContent: "center",
                                                                padding: "6em",
                                                            }}>
                                                            <Box component="img" src={imagesLightbox_two[2].Url} />

                                                        </motion.div>

                                                        <motion.div
                                                            onClick={() => handleOpenLightbox(imagesLightbox_two[2].Url, imagesLightbox_two)}
                                                            whileHover={{ opacity: 0.9 }}
                                                            align={"center"}
                                                            elevation={2}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                zIndex: 999,
                                                                opacity: 0,
                                                                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)",
                                                                alignItems: 'center',
                                                                alignContent: 'center',
                                                                p: "2em"
                                                            }}>


                                                            <IconButton onClick={() => handleOpenLightbox(imagesLightbox_two[2].Url, imagesLightbox_two)}>
                                                                <FullscreenIcon fontSize='large' sx={{
                                                                    color: '#ffffff'
                                                                }} />
                                                            </IconButton>

                                                        </motion.div>

                                                    </Card>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>

                            </Box>

                            <Box className="g03_container">
                                <Box className="collection-list-wrapper w-dyn-list">
                                    <Box className="w-dyn-items">
                                        <Box className="g03_image_wrap w-dyn-item">

                                            <MotionInView variants={varFadeInUp}>

                                                <Box className="g03_image_tall">

                                                    <Card
                                                        className="g03_image_link w-inline-block w-lightbox"
                                                        align={"left"}
                                                        elevation={12}
                                                        sx={{
                                                            position: "relative",
                                                            padding: "0em",
                                                            borderRadius: '0em',
                                                            backgroundImage: "radial-gradient(circle, rgba(253, 0, 219, 0.8) 0%, rgb(235, 12, 123) 100%)",

                                                        }}>

                                                        <motion.div
                                                            whileHover={{ scale: 1.1, }}
                                                            className="gallery_cover"
                                                            align={"center"}
                                                            elevation={2}
                                                            style={{
                                                                opacity: 1,
                                                                borderRadius: '0em',
                                                                alignContent: "center",
                                                                padding: "16em",
                                                            }}>
                                                            <Box component="img" src={imagesLightbox_two[4].Url} />

                                                        </motion.div>

                                                        <motion.div
                                                            onClick={() => handleOpenLightbox(imagesLightbox_two[4].Url, imagesLightbox_two)}
                                                            whileHover={{ opacity: 0.9 }}
                                                            align={"center"}
                                                            elevation={2}
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: "100%",
                                                                height: "100%",
                                                                zIndex: 999,
                                                                opacity: 0,
                                                                backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 100%)",
                                                                alignItems: 'center',
                                                                alignContent: 'center',
                                                                p: "2em"
                                                            }}>


                                                            <IconButton onClick={() => handleOpenLightbox(imagesLightbox_two[4].Url, imagesLightbox_two)}>
                                                                <FullscreenIcon fontSize='large' sx={{
                                                                    color: '#ffffff'
                                                                }} />
                                                            </IconButton>

                                                        </motion.div>

                                                    </Card>


                                                </Box>

                                            </MotionInView>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>

                    </Box>

                    <Box className="section_features" sx={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                    }}>

                        <Box className="line_break" sx={{
                            backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                        }}></Box>

                        <Box className="container">

                            <Box className="feature-wrapper">

                                <Box className="feature_col">

                                    <motion.img
                                        whileHover={{ scale: 1.1, }}

                                        src={reacticon}
                                        alt="" className="feature_icon" />

                                    <h4 className="h4"
                                        style={{
                                            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            textAlign: "center",
                                            [theme.breakpoints.up('md')]: {
                                                textAlign: "start"
                                            },
                                        }}
                                    >Interface Design<br /></h4>

                                </Box>

                                <Box className="feature_col">
                                    <motion.img
                                        whileHover={{ scale: 1.1, }}
                                        src={materialuiicon}
                                        alt="" className="feature_icon" />

                                    <h4 className="h4"
                                        style={{
                                            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            textAlign: "center",

                                        }}
                                    >library<br /></h4>

                                </Box>

                                <Box className="feature_col">
                                    <motion.img
                                        whileHover={{ scale: 1.1, }}
                                        src={mongodbicon}
                                        alt="" className="feature_icon" />
                                    <motion.img
                                        whileHover={{ scale: 1.1, }}
                                        src={mysqlicon}
                                        alt="" className="feature_icon" />
                                    <h4 className="h4"
                                        style={{
                                            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            textAlign: "center",

                                        }}
                                    >Databases<br /></h4>

                                </Box>

                                <Box className="feature_col">
                                    <motion.img
                                        whileHover={{ scale: 1.1, }}
                                        src={nodejsicon}
                                        alt="" className="feature_icon" />
                                    <motion.img
                                        whileHover={{ scale: 1.1, }}
                                        src={pythonicon}
                                        alt="" className="feature_icon" />
                                    <h4 className="h4"
                                        style={{
                                            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                            textAlign: "center",

                                        }}
                                    >Backend and Logic<br /></h4>

                                </Box>

                            </Box>

                            <Box className="line_break" sx={{
                                backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

                            }}></Box>

                            <Box className="button_wrap">
                                <motion.button
                                    onClick={onClickPrevious}
                                    whileHover={{ scale: 1.1, }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                        border: '1px solid #000',
                                        borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                    }}

                                    className="button_clone w-button">Previous
                                </motion.button>
                                <motion.button
                                    onClick={onClickNext}

                                    whileHover={{ scale: 1.1, }}
                                    style={{
                                        color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                                        border: '1px solid #000',
                                        borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

                                    }}
                                    href="https://webflow.partnerlinks.io/flowbase-clone?content=cms-lightbox-flowbase" target="_blank"
                                    className="button_clone w-button">Next
                                </motion.button>
                            </Box>

                            <Box className="line_break" sx={{
                                backgroundColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
                            }}></Box>

                        </Box>

                    </Box>

                </ContentStyle>

                <LightboxModal
                    images={selectedArray}
                    photoIndex={selectedImage}
                    setPhotoIndex={setSelectedImage}
                    isOpen={openLightbox}
                    onClose={() => setOpenLightbox(false)}
                />

            </Box >

        </RootStyle >

    );

}


