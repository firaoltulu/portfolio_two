import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// ----------------------------------------------------------------------

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: <ExpandMoreIcon></ExpandMoreIcon>
      },

      styleOverrides: {
        root: {}
      }
    }
  };
}
