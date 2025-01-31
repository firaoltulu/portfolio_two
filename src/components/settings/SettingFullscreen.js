import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// material
import { alpha } from '@mui/material/styles';
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

export default function SettingFullscreen() {
  const theme = useTheme();

  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <Button
      fullWidth
      size="large"
      variant="outlined"
      startIcon={fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      onClick={toggleFullScreen}
      sx={{
        fontSize: 14,
        ...(fullscreen && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
        }),
        // backgroundColor: theme.palette.mode === 'light' ? 'common.white' : '#371f0e',
        // color: theme.palette.mode === 'light' ? '#fcf2ec' : '#fcf2ec',
      }}
    >
      {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
    </Button >
  );
}
