// material
import { styled, alpha } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import { CheckInIllustration } from '../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 2, 2, 3),
  // backgroundImage:
  //   theme.palette.mode === 'light'
  //     ? `linear-gradient(45deg, ${theme.palette.grey[400]} 0%, ${alpha(theme.palette.grey[600], 0.4)} 100%)`
  //     : `linear-gradient(45deg, ${theme.palette.grey['800']} 0%, ${alpha(theme.palette.grey['A700'], 0.4)} 100%, transparent 100%)`,
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${theme.palette.grey[300]} 0%, ${alpha(theme.palette.grey[300], 0)} 100%)`
      : 'none',
}));

// ----------------------------------------------------------------------


export default function BookingCheckIn() {
  return (

    <RootStyle>

      <Box
        sx={{
          width: 120,
          height: 120,
          lineHeight: 0,
          borderRadius: '50%',
          bgcolor: 'background.neutral',
        }}
      >
        <CheckInIllustration />
      </Box>

      <div>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Hello, I am
        </Typography>
        <Typography variant="h3">Firaol</Typography>

      </div>

    </RootStyle>

  );

}
