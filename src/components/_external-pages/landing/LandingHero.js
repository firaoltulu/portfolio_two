import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
// material
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//
import { MHidden } from 'src/components/@material-extend';
import { TextAnimate } from '../../animate';
// hooks
import useNav from '../../../hooks/useNav';
// 
import hero_one from "../../../assets/hero/hero_one.png";
import hero_two from "../../../assets/hero/hero_two.png";
import ethiopia from "../../../assets/hero/ethiopia.png";

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#c4c4c4", 1)},  ${alpha("#dad8d6", 1)})`
      : `linear-gradient(45deg, ${theme.palette.grey[700]} 0%, ${alpha(theme.palette.grey[900], 1)} 100%)`,

}));

// ----------------------------------------------------------------------

export default function LandingHero({ bodyRef }) {
  const theme = useTheme();
  const { navOption, isLock, onScrollChange } = useNav();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && (isLock === false)) {
      onScrollChange(navOption[0]);
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

  const distortionRef = useRef(null);

  useEffect(() => {
    const container = distortionRef.current;

    // Set container dimensions
    const width = container.offsetWidth || window.innerWidth;
    const height = container.offsetWidth || window.innerWidth;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Load Textures
    const loader = new THREE.TextureLoader();
    const texture1 = loader.load(
      hero_one,
      () => { }
    );
    const texture2 = loader.load(
      hero_two,
      () => { }
    );
    const displacementTexture = loader.load(
      'https://cdn.prod.website-files.com/63bc16fb3515e53bca5e0290/63bf1909fab9d2c4be5099cd_diss%201.png',
      () => { }
    );

    // Fix texture wrapping
    [texture1, texture2, displacementTexture].forEach((texture) => {
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
    });

    // Shader Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture1: { value: texture1 },
        uTexture2: { value: texture2 },
        uDisplacement: { value: displacementTexture },
        uProgress: { value: 0 }, // Progress from 0 to 1
        uDistortionStrength: { value: 0 }, // Distortion strength
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.1);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture1;
        uniform sampler2D uTexture2;
        uniform sampler2D uDisplacement;
        uniform float uProgress;
        uniform float uDistortionStrength;
        
        void main() {
          vec2 uv = vUv;
          
          // Apply displacement to UV coordinates
          vec4 disp = texture2D(uDisplacement, uv);
          vec2 distortedUv = uv + disp.rg * (uDistortionStrength * 1.01);

          // Fetch textures
          vec4 texture1 = texture2D(uTexture1, distortedUv);
          vec4 texture2 = texture2D(uTexture2, uv);

          // Mix textures based on progress
          gl_FragColor = mix(texture1, texture2, uProgress);
        }
      `,
    });

    // Plane Geometry
    const geometry = new THREE.PlaneGeometry(width, height, 32, 32);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Hover Events
    container.addEventListener('mouseenter', () => {
      // Animate distortion and progress
      gsap.to(material.uniforms.uDistortionStrength, { value: 1, duration: 1 });
      gsap.to(material.uniforms.uProgress, { value: 1, duration: 1 });
    });

    container.addEventListener('mouseleave', () => {
      // Reset distortion and progress
      gsap.to(material.uniforms.uDistortionStrength, { value: 0, duration: 1 });
      gsap.to(material.uniforms.uProgress, { value: 0, duration: 1 });
    });

    // Cleanup
    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };

  }, []);

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start start", "end end"],
  });

  const progressScroll = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Box ref={ref}>

      <RootStyle id="hero_section">

        <Box className="header_fixed">

          <Box className="process_progress_header">

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

          <MHidden width='mdDown'>

            <Box className="header" sx={{
              color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
            }}>

              <Box className="header_request">

                <a href="https://flowcv.com/resume/0d0uu5mt3k" target="_blank"
                  className="senad_a_request w-inline-block">
                  <Box className="font_light"
                    sx={{
                      color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                      borderBottom: '1px dotted #371f0e',
                      borderBottomColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                    }}
                  >
                    download Cv
                  </Box>
                </a>

              </Box>


              <TextAnimate
                text="Developer Firaol"
                component={motion.h4}

                sx={{
                  typography: 'h4',
                  marginBottom: '10px',
                  lineHeight: '24px',
                  textTransform: 'uppercase',
                  marginTop: '10px',
                  marginBottom: '10px',
                  fontFamily: 'Ade display, sans-serif',
                  fontSize: '1.5em',
                  fontWeight: '400',
                  lineHeight: '1',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '2.5em',
                  },

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '5em',
                  },

                }}
              >
              </TextAnimate>


              <Box className="header_navigation">

              </Box>

              <a href="#hero_section"
                className="header_link w-inline-block" >
                <IconButton>
                  <ArrowUpwardIcon fontSize='small' sx={{
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
                  }}
                  >
                  </ArrowUpwardIcon>
                </IconButton>
              </a>

            </Box>

          </MHidden>

        </Box>

        <Box className="hero"
          sx={{
            backgroundImage:
              theme.palette.mode === 'light'
                ? `linear-gradient(180deg, ${alpha("#c7c7c7", 0.1)}, ${alpha("#e8e8e8", 1)},  ${alpha("#dad8d6", 1)})`
                : `linear-gradient(45deg, ${theme.palette.grey[700]} 0%, ${alpha(theme.palette.grey[900], 1)} 100%)`,

            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

          }}
        >

          <Box className="hero_main" >

            <TextAnimate
              text="hey,"
              component={motion.h1}
              sx={{
                typography: 'h1',
                whiteSpace: 'nowrap',

                textTransform: 'uppercase',
                marginTop: '40px',
                fontFamily: 'Ade display, sans-serif',
                fontSize: '1.4em',
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: '0',

                [theme.breakpoints.down('md')]: {
                  fontSize: '8em',
                },

                [theme.breakpoints.down('sm')]: {
                  textAlign: 'center',
                  fontSize: '10em',

                },

              }}
            />
            <TextAnimate
              text="I’m Firaol"
              component={motion.h1}
              sx={{
                typography: 'h1',
                whiteSpace: 'nowrap',

                textTransform: 'uppercase',
                fontFamily: 'Ade display, sans-serif',
                fontSize: '5.4em',
                fontWeight: 400,

                lineHeight: 1,

                marginBottom: '10px',
                marginTop: '0px',


                [theme.breakpoints.down('md')]: {
                  fontSize: '8em',
                },

                [theme.breakpoints.down('sm')]: {
                  textAlign: 'center',
                  fontSize: '10em',

                },

              }}
            />

            <Box className="hero_links" sx={{ mt: '4em' }}>


              <a href="https://www.linkedin.com/in/firaol-tulu-740962248/" target="_blank"
                className="hero_soc w-inline-block">
                <TextAnimate
                  text="linkedin"
                  component={motion.h5}
                  sx={{
                    typography: 'h5',
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

                    textTransform: 'uppercase',
                    marginTop: '0',
                    marginBottom: '0',
                    fontFamily: 'Ade display, sans-serif',
                    fontSize: '1em',
                    fontWeight: 400,
                    lineHeight: '1',



                    [theme.breakpoints.down('md')]: {
                      fontSize: '2em'
                    },

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '3.5em',
                    },

                  }}
                />
              </a>

              <a href="https://github.com/firaoltulu" target="_blank" className="hero_soc w-inline-block">

                <TextAnimate
                  text="github"
                  component={motion.h5}
                  sx={{
                    typography: 'h5',
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

                    textTransform: 'uppercase',
                    marginTop: '0',
                    marginBottom: '0',
                    fontFamily: 'Ade display, sans-serif',
                    fontSize: '1em',
                    fontWeight: 400,
                    lineHeight: '1',



                    [theme.breakpoints.down('md')]: {
                      fontSize: '2em'
                    },

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '3.5em',
                    },

                  }}
                />

              </a>

              <a href="https://x.com/firaool5"
                target="_blank" className="hero_soc w-inline-block"
              >

                <TextAnimate
                  text="X"
                  component={motion.h5}
                  sx={{
                    typography: 'h5',
                    color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',

                    textTransform: 'uppercase',
                    marginTop: '0',
                    marginBottom: '0',
                    fontFamily: 'Ade display, sans-serif',
                    fontSize: '1em',
                    fontWeight: 400,
                    lineHeight: '1',



                    [theme.breakpoints.down('md')]: {
                      fontSize: '2em'
                    },

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '3.5em',
                    },

                  }}
                />
              </a>

            </Box>

          </Box>

          <Box className="hero_images">
            <Box ref={distortionRef} className="distortion"
              sx={{
                border: '2px dotted #371f0e',
                borderColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                backgroundImage:
                  theme.palette.mode === 'light'
                    ? `linear-gradient(45deg, rgba(96, 108, 179, 0.2), rgba(37, 57, 112, 0.4))`
                    : `linear-gradient(45deg, rgba(96, 108, 179, 0.2), rgba(37, 57, 112, 0.1))`,
              }}
            ></Box>
            {/* <motion.img
              src={ethiopia}
              loading="lazy" alt="" className="hero_big_star"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity }} /> */}
            <motion.img
              src={ethiopia}
              loading="lazy" alt="" className="hero_star"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity }} />
          </Box>

          <Box className="hero_additional">

            <TextAnimate
              text="Skilled"
              component={motion.h2}
              sx={{
                typography: 'h2',

                fontWeight: 'bold',

                marginTop: '20px',
                fontSize: '32px',
                lineHeight: '36px',

                textTransform: 'uppercase',
                marginTop: '20px',
                fontFamily: 'Ade display, sans-serif',
                fontSize: '3.5em',
                fontWeight: 400,
                lineHeight: '1',

                width: '100%',

                [theme.breakpoints.down('md')]: {
                  fontSize: '6em',
                  display: 'block',
                  textAlign: 'right'
                },

                [theme.breakpoints.down('sm')]: {
                  fontSize: '8em',
                  textAlign: 'center'
                },
                [theme.breakpoints.down('xl')]: {
                  paddingLeft: 0
                },


              }}
            />

            <TextAnimate
              text="Experienced"
              component={motion.h2}
              sx={{
                typography: 'h2',

                fontWeight: 'bold',
                fontSize: '32px',
                lineHeight: '36px',
                textTransform: 'uppercase',
                fontFamily: 'Ade display, sans-serif',
                fontSize: '3.5em',
                fontWeight: 400,
                lineHeight: '1',

                width: '100%',



                [theme.breakpoints.down('xl')]: {
                  paddingLeft: 0
                },
                position: 'relative',

                left: theme.direction === "rtl" ?
                  '-4.75em'
                  : '-4.75em',
                [theme.breakpoints.down('md')]: {
                  fontSize: '6em',
                  display: 'block',
                  textAlign: 'right',
                  display: 'block',
                  left: 0
                },

                [theme.breakpoints.down('sm')]: {
                  left: 0,
                  fontSize: '8em',
                  textAlign: 'center'

                },

              }}
            />

            <TextAnimate
              text="DEVELOPER"
              component={motion.h2}
              sx={{
                typography: 'h2',

                fontWeight: 'bold',
                fontSize: '32px',
                lineHeight: '36px',
                textTransform: 'uppercase',
                fontFamily: 'Ade display, sans-serif',
                fontSize: '3.5em',
                fontWeight: 400,
                lineHeight: '1',
                marginBottom: '10px',

                width: '100%',


                [theme.breakpoints.down('xl')]: {
                  paddingLeft: 0
                },

                position: 'relative',
                left: theme.direction === "rtl" ?
                  '-2.6em'
                  : '-2.6em',
                [theme.breakpoints.down('md')]: {
                  fontSize: '6em',
                  display: 'block',
                  textAlign: 'right',
                  display: 'block',
                  left: 0
                },

                [theme.breakpoints.down('sm')]: {
                  fontSize: '8em',
                  textAlign: 'center',
                  left: 0,
                },

              }}
            />


            <Box className="font_light hero_info tricks"
              sx={{
                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                mt: '2em'
              }}
            >

              <motion.span
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                {`I’m a Software Developer with +5 year of experience who loves building innovative applications that make an impact.😊`.split("").map((letter, index) => (
                  <motion.span
                    className="hero_h2_3"
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
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>

              <br />

            </Box>

            <a href="https://flowcv.com/resume/0d0uu5mt3k" target="_blank"
              className="senad_a_request_two w-inline-block">
              <Box className="font_light" sx={{
                color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
                borderBottom: '1px dotted #371f0e',
                borderBottomColor: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec',
              }}>Download Cv</Box>
            </a>

          </Box>

        </Box>

      </RootStyle>

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
            <h5>Python</h5>
            <h5>•</h5>
            <h5>JavaScript</h5>
            <h5>•</h5>
            <h5>C#</h5>
            <h5>•</h5>
            <h5>PHP</h5>
            <h5>•</h5>
            <h5>Java</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>React</h5>
            <h5>•</h5>
            <h5>Nodejs</h5>
            <h5>•</h5>
            <h5>Asp.net</h5>
            <h5>•</h5>
            <h5>Django</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>Python</h5>
            <h5>•</h5>
            <h5>JavaScript</h5>
            <h5>•</h5>
            <h5>C#</h5>
            <h5>•</h5>
            <h5>PHP</h5>
            <h5>•</h5>
            <h5>Java</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>React</h5>
            <h5>•</h5>
            <h5>Nodejs</h5>
            <h5>•</h5>
            <h5>Asp.net</h5>
            <h5>•</h5>
            <h5>Django</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>Python</h5>
            <h5>•</h5>
            <h5>JavaScript</h5>
            <h5>•</h5>
            <h5>C#</h5>
            <h5>•</h5>
            <h5>PHP</h5>
            <h5>•</h5>
            <h5>Java</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>React</h5>
            <h5>•</h5>
            <h5>Nodejs</h5>
            <h5>•</h5>
            <h5>Asp.net</h5>
            <h5>•</h5>
            <h5>Django</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>Python</h5>
            <h5>•</h5>
            <h5>JavaScript</h5>
            <h5>•</h5>
            <h5>C#</h5>
            <h5>•</h5>
            <h5>PHP</h5>
            <h5>•</h5>
            <h5>Java</h5>
            <h5>•</h5>
          </Box>
          <Box className="infinity_inside">
            <h5>React</h5>
            <h5>•</h5>
            <h5>Nodejs</h5>
            <h5>•</h5>
            <h5>Asp.net</h5>
            <h5>•</h5>
            <h5>Django</h5>
            <h5>•</h5>
          </Box>

        </motion.div>

      </Box>

      <Box sx={{ height: { md: '1vh' } }} />

    </Box>
  );
}
