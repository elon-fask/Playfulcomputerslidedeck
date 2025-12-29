import { useEffect, useState } from 'react';
import PresentationDashboard from './components/PresentationDashboard';
import FirstPresentation from './components/FirstPresentation';
import SecondPresentation from './components/SecondPresentation';
import './index.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    // Simple client-side routing
    const path = window.location.pathname;
    setCurrentRoute(path);

    // Listen for route changes
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route rendering
  const renderRoute = () => {
    if (currentRoute === '/first-presentation') {
      return <FirstPresentation />;
    } else if (currentRoute === '/second-presentation') {
      return <SecondPresentation />;
    } else {
      return <PresentationDashboard />;
    }
  };

  return <>{renderRoute()}</>;
}

export default App;
