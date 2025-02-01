
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { store, persistor } from './redux/store';
// contexts
import { SettingsProvider } from './contexts/SettingsContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';
import { AuthProvider } from './contexts/JWTContext';
import { NavProvider } from './contexts/NavContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


// components
import App from './App';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <SettingsProvider>

          <CollapseDrawerProvider>

            <BrowserRouter>
              <AuthProvider>
                <NavProvider>
                  <App />
                </NavProvider>
              </AuthProvider>
            </BrowserRouter>

          </CollapseDrawerProvider>

        </SettingsProvider>,
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();


