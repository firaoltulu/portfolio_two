import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from '@mui/material/styles';
// material
import { Box, Grid, Radio, Paper, RadioGroup, CardActionArea, FormControlLabel } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function SettingMode() {
  const theme = useTheme();

  const { themeMode, onChangeMode } = useSettings();

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
      <Grid container spacing={2.5} dir="ltr">
        {['light', 'dark'].map((mode, index) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                width: 1,
                zIndex: 0,
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: theme.palette.mode === 'light' ? 'common.white' : '#fcf2ec',

                ...('dark' === mode && {
                  backgroundColor: theme.palette.mode === 'light' ? '#212B36' : '#212B36',
                }),

                ...(themeMode === mode && {
                  boxShadow: (theme) => theme.customShadows.z12
                })
              }}
            >
              <CardActionArea sx={{ color: 'primary.main' }}>
                <Box
                  sx={{
                    py: 4,
                    display: 'flex',
                    color: 'text.disabled',
                    justifyContent: 'center',
                    ...(themeMode === mode && {
                      color: 'primary.main'
                    }),

                  }}
                >
                  {index === 0 ?
                    <LightModeIcon sx={{ color: theme.palette.mode === 'light' ? '' : 'black' }}
                    ></LightModeIcon> : <NightlightIcon width={24} height={24} sx={{ color: theme.palette.mode === 'light' ? 'common.white' : '' }}></NightlightIcon>}
                </Box>

                <FormControlLabel
                  label=""
                  value={mode}
                  control={<Radio sx={{ display: 'none' }} />}
                  sx={{
                    top: 0,
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                  }}
                />
              </CardActionArea>

            </Paper>
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
