// hooks
import useAuth from '../hooks/useAuth';
//
import { MAvatar } from './@material-extend';
import createAvatar from '../utils/createAvatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  const { alt } = other;

  return (
    <>
      {user !== null && <MAvatar
        src={user.PhotoURL}
        alt={alt !== void (0) ? alt : user.FirstName}
        color={user.PhotoURL ? 'default' : createAvatar(user.displayName).color}
        {...other}
      >
        {alt !== void (0) ? createAvatar(alt).name : createAvatar(user.FirstName).name}
      </MAvatar>}

      {user === null && <MAvatar
        src={""}
        alt={"Account"}
        color={'default'}
        {...other}
      >
        {/* {createAvatar(user.FirstName).name} */}
      </MAvatar>}
    </>
  );

}
