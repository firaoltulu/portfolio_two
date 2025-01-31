import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import { SERVER_URL } from "../URL/index";
import FormData from "form-data";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  isSignup: false,
  user: null,
  role: 1,
};

const handlers = {

  INITIALIZE: (state, action) => {

    const { isAuthenticated, user, isSignup } = action.payload;
    var role = 1;
    if (user?.Role === "Level 1") {
      role = 1;
    }
    else if (user?.Role === "Level 2") {
      role = 2;
    }
    else if (user?.Role === "Level 3") {
      role = 3;
    }
    else {
      role = 1;
    }

    return {
      ...state,
      isAuthenticated,
      isSignup,
      isInitialized: true,
      user,
      role
    };
  },
  LOGIN: (state, action) => {

    const { isAuthenticated, user, isSignup } = action.payload;
    var role = 1;
    if (user?.Role === "Level 1") {
      role = 1;
    }
    else if (user?.Role === "Level 2") {
      role = 2;
    }
    else if (user?.Role === "Level 3") {
      role = 3;
    }
    else {
      role = 1;
    }

    return {
      ...state,
      isAuthenticated,
      isSignup: isSignup,
      user,
      role
    };

  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    isSignup: state.isSignup,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user, isSignup } = action.payload;

    if (user.IsActive) {
      return {
        ...state,
        isSignup: isSignup,
        isAuthenticated: true,
        user
      };
    }
    else {
      return {
        ...state,
        isAuthenticated: false,
        isSignup: isSignup,
        user
      };
    }
  },
  RESETPASSWORD: (state, action) => {

  },
  VERIFYEMAIL: (state, action) => {
    const { user, isSignup } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      isSignup: isSignup,
      user
    };
  },
  UPDATE: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      isSignup: state.isSignup,
      user
    };
  },
  UPDATE_LINKS: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      isSignup: state.isSignup,
      user
    };
  },
  UPDATEPASSWORD: (state, action) => {
    const { user } = action.payload;


    return {
      ...state,
      isAuthenticated: true,
      isSignup: state.isSignup,
      user
    };
  }

};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  verifyemail: () => Promise.resolve(),
  updateProfile: () => Promise.resolve(),
  updateNotification: () => Promise.resolve(),
  updateLinks: () => Promise.resolve(),
  updatePassword: () => Promise.resolve(),
  deleteProfilePhoto: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node
};

function AuthProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const response = await axios.get(`${SERVER_URL}/account/my-account`, {
            headers: {
              'cookies': `Bearer ${accessToken}`,
            }
          });
          const { user } = response.data;

          if (user.IsActive) {
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isSignup: true,
                isAuthenticated: true,
                user
              }
            });
          }
          else {
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isSignup: true,
                isAuthenticated: false,
                user
              }
            });

          }

        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isSignup: false,
              isAuthenticated: false,
              user: null
            }
          });
        }

      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isSignup: false,
            isAuthenticated: false,
            user: null
          }
        });
      }

    };

    initialize();
  }, []);

  const register = async (email, password, firstName, lastName) => {

    const response = await axios.post(`${SERVER_URL}/account/register`, {
      email,
      password,
      firstName,
      lastName
    });

    const { accessToken, user } = response.data;
    setSession(accessToken);

    dispatch({
      type: 'REGISTER',
      payload: {
        user,
        isSignup: true
      }
    });

  };

  const login = async (email, password) => {

    const response = await axios.post(`${SERVER_URL}/account/login`, {
      email,
      password
    });

    const { accessToken, user } = response.data;

    setSession(accessToken);

    if (user.IsActive) {

      dispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          isSignup: true,
          user
        }
      });

    }
    else {

      dispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: false,
          isSignup: true,
          user
        }
      });

    }


  };

  const verifyemail = async (code1) => {

    try {
      const locaccessToken = window.localStorage.getItem('accessToken');

      if (locaccessToken && isValidToken(locaccessToken)) {
        setSession(locaccessToken);

        const response = await axios.post(`${SERVER_URL}/account/verify-email`, {
          message: code1,
          headers: {
            'cookies': `Bearer ${locaccessToken}`,
          }
        });

        const { user, accessToken } = response.data;


        setSession(accessToken);

        if (user.IsActive) {
          dispatch({
            type: 'VERIFYEMAIL',
            payload: {
              isSignup: true,
              isAuthenticated: true,
              user
            }
          });

        }
        else {
          dispatch({
            type: 'VERIFYEMAIL',
            payload: {
              isSignup: true,
              isAuthenticated: false,
              user
            }
          });

        }

      }
      else {
        dispatch({
          type: 'VERIFYEMAIL',
          payload: {
            isSignup: false,
            isAuthenticated: false,
            user: null
          }
        });

      }

    } catch (error) {
      dispatch({
        type: 'VERIFYEMAIL',
        payload: {
          isSignup: false,
          isAuthenticated: false,
          user: null
        }
      });
    }
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = async (email) => {

    const response = await axios.post(`${SERVER_URL}/account/resetPassword`, {
      email
    });

    const { emailSend } = response.data;

    return emailSend;

  };

  const updateProfile = async (editval) => {

    var formdata = new FormData();
    formdata.append("FirstName", editval.FirstName);
    formdata.append("LastName", editval.LastName);
    formdata.append("About", editval.about);
    formdata.append("City", editval.city);
    formdata.append("Country", editval.country);
    formdata.append("State", editval.state);
    formdata.append("Email", editval.email);
    formdata.append("IsPublic", editval.isPublic);
    if (editval.photoURL && editval.photoURL.file !== void (0)) {
      formdata.append("NewImageFile", editval.photoURL.file, editval.photoURL.file.name)
    }
    const response = await axios.post(`${SERVER_URL}/user/updateprofile`, formdata);

    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch({
      type: 'UPDATE',
      payload: {
        user
      }
    });

  };

  const updateNotification = async (editval) => {

    var formdata = new FormData();
    formdata.append("activityAnswers", editval.activityAnswers);
    formdata.append("activityComments", editval.activityComments);

    const response = await axios.post(`${SERVER_URL}/user/updateprofile`, formdata);

    const { accessToken, user } = response.data;
    setSession(accessToken);

    dispatch({
      type: 'UPDATE',
      payload: {
        user
      }
    });

  };

  const updateLinks = async (editval) => {
    var formdata = new FormData();
    formdata.append("Facebook_Link", editval.facebookLink);
    formdata.append("Instagram_Link", editval.instagramLink);
    formdata.append("Linkdin_Link", editval.linkedinLink);
    formdata.append("Twitter_Link", editval.twitterLink);


    const response = await axios.post(`${SERVER_URL}/user/updateprofile`, formdata);

    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch({
      type: 'UPDATE',
      payload: {
        user
      }
    });

  };

  const updatePassword = async (editval) => {

    var formdata = new FormData();
    formdata.append("OldPassword", editval.oldPassword);
    formdata.append("NewPassword", editval.newPassword);
    formdata.append("ConfirmNewPassword", editval.confirmNewPassword);

    const response = await axios.post(`${SERVER_URL}/user/updateprofile_Password`, formdata);

    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch({
      type: 'UPDATEPASSWORD',
      payload: {
        user
      }
    });

  };

  const deleteProfilePhoto = async (ImageID) => {

    const response = await axios.post(`${SERVER_URL}/user/remove_gallery`, ImageID);

    const { accessToken, user } = response.data;
    setSession(accessToken);
    dispatch({
      type: 'UPDATE',
      payload: {
        user
      }
    });

  };

  return (

    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
        verifyemail,
        resetPassword,
        updateProfile,
        updateNotification,
        updateLinks,
        updatePassword,
        deleteProfilePhoto
      }}
    >
      {children}
    </AuthContext.Provider>

  );

};

export { AuthContext, AuthProvider };
