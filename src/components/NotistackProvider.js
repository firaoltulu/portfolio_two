import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { SnackbarProvider } from 'notistack';
import InfoIcon from '@mui/icons-material/Info';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import infoFill from '@iconify/icons-eva/info-fill';
// import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
// import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
// material
// import { makeStyles, createStyles } from '@mui/styles';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

// const useStyles = makeStyles((theme) => {
//   const isLight = theme.palette.mode === 'light';

//   const createStyle = {
//     color: `${theme.palette.text.primary} !important`,
//     backgroundColor: `${theme.palette.background.paper} !important`
//   };

//   return createStyles({
//     containerRoot: {
//       pointerEvents: 'unset',
//       '& .MuiCollapse-wrapperInner': {
//         width: '100%'
//       }
//     },
//     contentRoot: {
//       width: '100%',
//       padding: theme.spacing(1.5),
//       margin: theme.spacing(0.25, 0),
//       boxShadow: theme.customShadows.z8,
//       borderRadius: theme.shape.borderRadius,
//       color: theme.palette.grey[isLight ? 0 : 800],
//       backgroundColor: theme.palette.grey[isLight ? 900 : 0]
//     },
//     message: {
//       padding: 0,
//       fontWeight: theme.typography.fontWeightMedium
//     },
//     action: {
//       marginRight: -4,
//       '& svg': {
//         width: 20,
//         height: 20,
//         opacity: 0.48,
//         '&:hover': { opacity: 1 }
//       }
//     },
//     info: { ...createStyle },
//     success: { ...createStyle },
//     warning: { ...createStyle },
//     error: { ...createStyle }
//   });
// });

const ContainerRoot = styled('div')(({ theme }) => ({
  pointerEvents: 'unset',
  '& .MuiCollapse-wrapperInner': {
    width: '100%',
  },
}));

const ContentRoot = styled('div')(({ theme }) => {
  const isLight = theme.palette.mode === 'light';
  return {
    width: '100%',
    padding: theme.spacing(1.5),
    margin: theme.spacing(0.25, 0),
    boxShadow: theme.customShadows.z8,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.grey[isLight ? 0 : 800],
    backgroundColor: theme.palette.grey[isLight ? 900 : 0],
  };
});

const Message = styled('div')(({ theme }) => ({
  padding: 0,
  fontWeight: theme.typography.fontWeightMedium,
}));

const Action = styled('div')(({ theme }) => ({
  marginRight: -4,
  '& svg': {
    width: 20,
    height: 20,
    opacity: 0.48,
    '&:hover': { opacity: 1 },
  },
}));

const createStyle = (theme) => ({
  color: `${theme.palette.text.primary} !important`,
  backgroundColor: `${theme.palette.background.paper} !important`,
});

const Info = styled('div')(({ theme }) => createStyle(theme));
const Success = styled('div')(({ theme }) => createStyle(theme));
const Warning = styled('div')(({ theme }) => createStyle(theme));
const Error = styled('div')(({ theme }) => createStyle(theme));

// ----------------------------------------------------------------------

SnackbarIcon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string
};

function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16)
      }}
    >
      <Icon icon={icon} width={24} height={24} />
    </Box>
  );
}

NotistackProvider.propTypes = {
  children: PropTypes.node
};

export default function NotistackProvider({ children }) {
  // const classes = useStyles();

  return (

    // <Box>
    //   {children}
    // </Box>
    <SnackbarProvider
      dense
      maxSnack={5}
      // preventDuplicate
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      iconVariant={{
        success: <SnackbarIcon icon={CheckCircleIcon} color="success" />,
        error: <SnackbarIcon icon={InfoIcon} color="error" />,
        warning: <SnackbarIcon icon={WarningIcon} color="warning" />,
        info: <SnackbarIcon icon={NewReleasesIcon} color="info" />
      }}
      classes={{
        containerRoot: ContainerRoot,
        contentRoot: ContentRoot,
        message: Message,
        action: Action,
        variantInfo: Info,
        variantSuccess: Success,
        variantWarning: Warning,
        variantError: Error
      }}
    >
      {children}
    </SnackbarProvider>
  );
}
