// import { Icon } from '@iconify/react';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import infoFill from '@iconify/icons-eva/info-fill';
// import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
// import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';

// ----------------------------------------------------------------------

export default function Alert(theme) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  const filledStyle = (color) => ({
    color: theme.palette[color].contrastText
  });

  const outlinedStyle = (color) => ({
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    border: `solid 1px ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      color: theme.palette[color][isLight ? 'main' : 'light']
    }
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          error: <InfoIcon></InfoIcon>,
          info: <ErrorIcon></ErrorIcon>,
          success: <CheckCircleIcon></CheckCircleIcon>,
          warning: <WarningIcon></WarningIcon>
        }
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5)
          }
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1)
          }
        },

        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error')
      }
    }
  };
}
