import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils

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
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isSignup: true,
            isAuthenticated: false,
            user:null
          }
        });

      } catch (err) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isSignup: true,
            isAuthenticated: false,
            user:null
          }
        });
      }

    };

    initialize();
  }, []);

  const register = async (email, password, firstName, lastName) => {

  };

  const login = async (email, password) => {


  };

  const verifyemail = async (code1) => {

  };

  const logout = async () => {

  };

  const resetPassword = async (email) => {


  };

  const updateProfile = async (editval) => {


  };

  const updateNotification = async (editval) => {

  };

  const updateLinks = async (editval) => {


  };

  const updatePassword = async (editval) => {



  };

  const deleteProfilePhoto = async (ImageID) => {


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
