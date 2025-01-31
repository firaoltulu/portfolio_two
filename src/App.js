// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// hooks
import useAuth from './hooks/useAuth';

// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import Settings from './components/settings';
import NotistackProvider from './components/NotistackProvider';


// ----------------------------------------------------------------------

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>

      <RtlLayout>
        <NotistackProvider>
          <Settings />
          <ScrollToTop />
          {isInitialized ? <Router /> : <LoadingScreen />}
        </NotistackProvider>
      </RtlLayout>

    </ThemeConfig>
  );
}
