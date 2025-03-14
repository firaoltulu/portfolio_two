import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListSubheader, ListItemButton } from '@mui/material';
//hooks
import useAuth from '../hooks/useAuth';

// ----------------------------------------------------------------------

const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.overline,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    color: theme.palette.text.primary
  })
);

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  // height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  '&:before': {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: 'none',
    position: 'absolute',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main
  }
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  active: PropTypes.func,
  isShow: PropTypes.bool,
  item: PropTypes.object
};

function NavItem({ item, active, isShow, userrole }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children, role } = item;
  const [open, setOpen] = useState(isActiveRoot);



  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    '&:before': { display: 'block' }
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium'
  };

  if (children) {

    if (userrole >= role) {
      return (
        <>
          <ListItemStyle
            onClick={handleOpen}
            sx={{
              ...(isActiveRoot && activeRootStyle)
            }}
          >
            <ListItemIconStyle>{icon && icon}</ListItemIconStyle>

            {isShow && (
              <>
                <ListItemText disableTypography primary={title} />
                {info && info}
                <Box
                  component={Icon}
                  icon={open ? ArrowBackIosNewIcon : ArrowForwardIosIcon}
                  sx={{ width: 16, height: 16, ml: 1 }}
                />
              </>
            )}
          </ListItemStyle>

          {isShow && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {children.map((item) => {
                  const { title, path, role } = item;
                  const isActiveSub = active(path);

                  if (userrole >= role) {
                    return (
                      <ListItemStyle
                        key={title}
                        component={RouterLink}
                        to={path}
                        sx={{
                          ...(isActiveSub && activeSubStyle)
                        }}
                      >
                        <ListItemIconStyle>

                          <Box
                            component="span"
                            sx={{
                              width: 4,
                              height: 4,
                              display: 'flex',
                              borderRadius: '50%',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: 'text.disabled',
                              transition: (theme) => theme.transitions.create('transform'),
                              ...(isActiveSub && {
                                transform: 'scale(2)',
                                bgcolor: 'primary.main'
                              })
                            }}
                          />

                        </ListItemIconStyle>

                        <ListItemText disableTypography primary={title} />

                      </ListItemStyle>

                    );
                  }
                  else {
                    return (
                      <Fragment key={`list-nav-children-list-${title}`}></Fragment>
                    );
                  }

                })}
              </List>
            </Collapse>
          )}
        </>
      );
    }
    else {
      return (
        <Fragment></Fragment>
      );
    }

  }

  if (userrole >= role) {

    return (
      <ListItemStyle
        component={RouterLink}
        to={path}
        sx={{
          ...(isActiveRoot && activeRootStyle)
        }}
      >
        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
        {isShow && (
          <>
            <ListItemText disableTypography primary={title} />
            {info && info}
          </>
        )}
      </ListItemStyle>
    );

  }
  else {
    return (
      <Fragment></Fragment>
    );
  }

};

NavSection.propTypes = {
  isShow: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function NavSection({ navConfig, isShow = true, ...other }) {
  const { role } = useAuth();
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      {navConfig.map((list, upind) => {
        const { subheader, items } = list;
        return (
          <List key={`nav-slider-list-item-${subheader}-${upind}`} disablePadding>
            {isShow && <ListSubheaderStyle>{subheader}</ListSubheaderStyle>}
            {items.map((item, index) => (
              <NavItem key={`nav-slider-list-item-${item.title}-${index}-${upind}`} item={item} active={match} isShow={isShow} userrole={role} />
            ))}
          </List>
        );
      })}
    </Box>
  );
}
