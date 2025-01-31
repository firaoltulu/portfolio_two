import { Icon } from '@iconify/react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import plusSquareOutline from '@iconify/icons-eva/plus-square-outline';
// import minusSquareOutline from '@iconify/icons-eva/minus-square-outline';
// import closeSquareOutline from '@iconify/icons-eva/close-square-outline';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const ICON_SIZE = { width: 20, height: 20 };

export default function TreeView(theme) {
  return {
    MuiTreeView: {
      defaultProps: {
        defaultCollapseIcon: <IndeterminateCheckBoxOutlinedIcon></IndeterminateCheckBoxOutlinedIcon>,
        defaultExpandIcon: <AddBoxOutlinedIcon></AddBoxOutlinedIcon>,
        defaultEndIcon: (
          <Box component={Icon} icon={CloseOutlinedIcon} {...ICON_SIZE} sx={{ color: 'text.secondary' }} />
        )
      }
    },
    MuiTreeItem: {
      styleOverrides: {
        label: { ...theme.typography.body2 },
        iconContainer: { width: 'auto' }
      }
    }
  };
}
