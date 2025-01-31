import { Icon } from '@iconify/react';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Link, Divider, Container, Typography, IconButton, Stack, Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
//
import Logo from 'src/components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: FacebookIcon },
  { name: 'Google', icon: GoogleIcon },
  { name: 'Linkedin', icon: LinkedInIcon },
  { name: 'Twitter', icon: XIcon }
];

const LINKS = [

  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: '(+251) 911 782 233', href: '#' },
      { name: 'firaoltulu5@gmail.com', href: '#' },
      { name: 'Ethiopia, Addis Ababa - Nifas silk lafto 325', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingFooter() {

  const theme = useTheme();


  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>

        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'
          }}
        >

          <Grid item xs={12} sx={{ mb: 3 }}>
            <Box sx={{ width: '64px' }}>
              <ScrollLink to="move_top" spy smooth>
                <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
              </ScrollLink>
            </Box>
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Enjoy the little things in life  for one day you may look back and realize they were the big things, My favourite quote.
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>

          </Grid>

        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
            color: theme.palette.mode === 'light' ? '#371f0e' : '#fcf2ec'

          }}
        >
          © 2024. All rights reserved
        </Typography>

      </Container>

    </RootStyle>
  );
}
