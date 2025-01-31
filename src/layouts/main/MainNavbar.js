import { capitalCase } from 'change-case';
// material
import { styled, alpha, useTheme } from '@mui/material/styles';
import {
  Box, AppBar, Toolbar,
  Tooltip, RadioGroup, Stack, CardActionArea,
  FormControlLabel, Radio,
} from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useNav from '../../hooks/useNav';
// components

import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 34;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  // height: APP_BAR_MOBILE,
  // transition: theme.transitions.create(['height', 'background-color'], {
  //   easing: theme.transitions.easing.easeInOut,
  //   duration: theme.transitions.duration.shorter
  // }),
  // [theme.breakpoints.up('md')]: {
  //   height: APP_BAR_DESKTOP
  // },
  width: { xl: APP_BAR_DESKTOP, lg: APP_BAR_DESKTOP, md: "100%", sm: "100%" },
  height: { xl: "100%", lg: "100%", md: "100%", sm: APP_BAR_MOBILE },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { navOption, active, isLock, onClickChange } = useNav();
  const theme = useTheme();
  const isOffset = useOffSetTop(100);

  useEffect(() => {
    if (isLock) {
      const targetElement = document.getElementById(active.to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

    }
  }, [active])

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        flexDirection: { md: "column", sm: "row" },
        width: { xl: APP_BAR_DESKTOP, lg: APP_BAR_DESKTOP, md: APP_BAR_DESKTOP, sm: "100vw", xs: "100vw" },
        height: { xl: "100vh", lg: "100vh", md: "100vh", sm: APP_BAR_MOBILE, xs: APP_BAR_MOBILE },
        p: 0,
        top: 0,
        left: 0,

        [theme.breakpoints.up('sm')]: {
          top: 0,
          left: 0,
          position: 'fixed',
          zIndex: 2001,
        },

        [theme.breakpoints.down('md')]: {
          backgroundImage:
            theme.palette.mode === 'light'
              ? `linear-gradient(180deg, ${theme.palette.grey[500]} 0%, ${alpha(theme.palette.grey[500], 0)} 100%)`
              : `linear-gradient(180deg, ${theme.palette.grey[800]} 0%, ${alpha(theme.palette.grey[900], 0)} 100%)`,
        },

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

          <RadioGroup name="themeColor" value={active} onChange={onClickChange}
            sx={
              {
                justifyContent: "center",
                alignItems: "center",

              }
            }>

            <Stack
              direction={{ xs: 'row', md: 'column' }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >

              {navOption.map((color, index) => {
                const colorName = color.name;
                const colorValue = color.value;
                const isSelected = (active.name === color.name);

                return (
                  <Tooltip title={capitalCase(colorName)} placement="right" key={colorName}>

                    <CardActionArea sx={{ color: colorValue, borderRadius: '50%', width: 32, height: 32 }}>

                      <Box
                        sx={{
                          width: 1,
                          height: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '50%',
                          ...(isSelected && {
                            borderStyle: 'solid',
                            borderWidth: 4,
                            borderColor: alpha(colorValue, 0.24)
                          })
                        }}
                      >

                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: colorValue,
                            ...(isSelected && {
                              width: 14,
                              height: 14,
                              transition: (theme) =>
                                theme.transitions.create('all', {
                                  easing: theme.transitions.easing.easeInOut,
                                  duration: theme.transitions.duration.shorter
                                })
                            })
                          }}
                        />

                        <FormControlLabel
                          label=""
                          value={colorName}
                          control={<Radio sx={{ display: 'none' }} />}
                          sx={{ top: 0, left: 0, margin: 0, width: 1, height: 1, position: 'absolute' }}
                        />

                      </Box>

                    </CardActionArea>

                  </Tooltip>
                );

              })}

            </Stack>

          </RadioGroup>

        </Box>

      </ToolbarStyle>

    </AppBar >
  );

}
