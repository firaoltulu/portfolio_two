import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// ----------------------------------------------------------------------

const PRIMARY_NAV = [
  {
    "name": "hero",
    "value": "#00AB55",
    "to": "hero_section"
  },
  {
    "name": "process",
    "value": "#7635dc",
    "to": "service_section"
  },
  {
    "name": "projects",
    "value": "#1CCAFF",
    "to": "project_section"
  },
  {
    "name": "about",
    "value": "#0045FF",
    "to": "testimonials_section"
  },
  {
    "name": "contact",
    "value": "#fda92d",
    "to": "contact_section"
  },

];

const initialState = {
  isLock: false,
  isLock: false,
  active: PRIMARY_NAV[0],
  navOption: PRIMARY_NAV
};


const handlers = {

  INITIALIZE: (state, action) => {

    const { isLock, active } = action.payload;

    return {
      ...state,
      isLock,
      active
    };
  },

  ONCLICKCHANGE: (state, action) => {
    const { isLock, active } = action.payload;

    return {
      ...state,
      isLock,
      active
    };
  },

  ONSCROLLCHANGE: (state, action) => {
    const { isLock, active } = action.payload;

    return {
      ...state,
      isLock,
      active
    };
  },

  ONREMOVELOCK: (state, action) => {
    const { isLock } = action.payload;

    return {
      ...state,
      isLock,
    };
  },

};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);


const NavContext = createContext({
  ...initialState,
  method: 'nav',
  onClickChange: () => { },
  onScrollChange: () => { },
  onRemoveLock: () => { },
});

NavProvider.propTypes = {
  children: PropTypes.node
};


function NavProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    const initialize = async () => {
      try {

        dispatch({
          type: 'INITIALIZE',
          payload: {
            isLock: false,
            active: PRIMARY_NAV[0],
          }
        });

      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isLock: false,
            active: PRIMARY_NAV[0],
          }
        });
      }

    };

    initialize();
  }, []);

  function useDelayedFunction(callback, delay = 10000) {
    useEffect(() => {
      if (typeof callback !== "function") {
        console.error("Callback must be a function");
        return;
      }

      const timer = setTimeout(callback, delay);

      return () => clearTimeout(timer); 
    }, [callback, delay]);
  }

  const onClickChange = (obj) => {

    const found = state.navOption.find((row, index) => {
      if (row.name === obj.target.value)
        return row;
    })

    if (found != void (0)) {
      dispatch({
        type: 'ONCLICKCHANGE',
        payload: {
          isLock: true,
          active: found
        }
      });

      // useDelayedFunction(onRemoveLock, 10);
      setTimeout(() => {
        onRemoveLock();
      }, 800);

    }

  };

  const onScrollChange = (obj) => {

    dispatch({
      type: 'ONSCROLLCHANGE',
      payload: {
        isLock: false,
        active: obj
      }
    });

  };

  const onRemoveLock = () => {

    dispatch({
      type: 'ONREMOVELOCK',
      payload: {
        isLock: false,
      }
    });

  };


  return (

    <NavContext.Provider
      value={{
        ...state,
        method: 'nav',
        onClickChange,
        onScrollChange,
        onRemoveLock,
      }}
    >
      {children}
    </NavContext.Provider>

  );

};

export { NavContext, NavProvider };
