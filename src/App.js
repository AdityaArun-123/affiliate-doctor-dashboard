import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Sidebar } from './components/side-bar/Sidebar';
import { DashBoard } from './components/dashboard/DashBoard';
import { ReferalTool } from './components/referal_tool/ReferalTool';
import { EarningHistory } from './components/earning_history/EarningHistory';
import { DynamicBreadcrumb } from './components/dynamic_breadcrumbs/DynamicBreadcrumb';
import { AppContextProvider } from './context/AppContextProvider';
import { OnboardingModal } from './components/onboarding_modal/OnboardingModal';
import { useEffect, useState } from 'react';

import './responsive-styling.css';

function App() {
  const [showOnBoardingModal, setShowOnBoardingModal] = useState(false);

  useEffect(() => {
    const hasSeenOnBoardingModal = localStorage.getItem("hasSeenOnBoardingModal");

    if (!hasSeenOnBoardingModal) {
      setShowOnBoardingModal(true);
    }
  }, []);

  const handleGetStarted = () => {
    localStorage.setItem("hasSeenOnBoardingModal", "true");
    setShowOnBoardingModal(false);
  };

  return (
    <>
      {
        showOnBoardingModal && <OnboardingModal onGetStarted={handleGetStarted} />
      }
      <AppContextProvider>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <DynamicBreadcrumb />
          <Routes>
            <Route path='/' element={<Navigate to='/affiliate/dashboard' replace />} />
            <Route path='/affiliate' element={<Navigate to='/affiliate/dashboard' replace />} />
            <Route path='/affiliate/dashboard' element={<DashBoard />} />
            <Route path='/affiliate/referal-tool' element={<ReferalTool />} />
            <Route path='/affiliate/earning-history' element={<EarningHistory />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
