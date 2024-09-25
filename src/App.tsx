import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';


const About = lazy(() => import('./pages/About'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const BusinessLoans = lazy(() => import('./pages/business/BusinessLoans'));
const BusinessChecking = lazy(() => import('./pages/business/BusinessChecking'));
const ResourceDigitalAssets = lazy(() => import('./pages/resources/ResourceDigitalAssets'));
const Loans = lazy(() => import('./pages/personal/Loans'));
const InvestmentSolutions = lazy(() => import('./pages/personal/InvestmentSolutions'));
const Personal = lazy(() => import('./pages/personal/Personal'));
const PersonalIndex = lazy(() => import('./pages/personal/PersonalIndex'));
const PersonalChecking = lazy(() => import('./pages/personal/PersonalChecking'));
const PersonalSaving = lazy(() => import('./pages/personal/PersonalSaving'));
const Business = lazy(() => import('./pages/business/Business'));
const BusinessIndex = lazy(() => import('./pages/business/BusinessIndex'));
const BusinessBankingSolutions = lazy(() => import('./pages/business/BusinessBankingSolutions'));
const BusinessSavingAccount = lazy(() => import('./pages/business/BusinessSavingAccount'));
const BusinessCREL = lazy(() => import('./pages/business/BusinessCREL'));
const Resource = lazy(() => import('./pages/resources/Resource'));
const ResourceIndex = lazy(() => import('./pages/resources/ResourceIndex'));
const ResourceRASProgram = lazy(() => import('./pages/resources/ResourceRASProgram'));
const ResourcePAM = lazy(() => import('./pages/resources/ResourcePAM'));
const ResourceCAI = lazy(() => import('./pages/resources/ResourceCAI'));
const WaysToBank = lazy(() => import('./pages/WaysToBank'));


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <ContactUs /> },
        {
          path: 'personal',
          element: <Personal />,
          children: [
            { path: '', element: <PersonalIndex /> },
            { path: 'personal-checking', element: <PersonalChecking /> },
            { path: 'savings', element: <PersonalSaving /> },
            { path: 'investment-solutions', element: <InvestmentSolutions /> },
            { path: 'loans', element: <Loans /> },
          ],
        },
        {
          path: 'business',
          element: <Business />,
          children: [
            { path: '', element: <BusinessIndex /> },
            { path: 'business-banking-solutions', element: <BusinessBankingSolutions /> },
            { path: 'business-savings-account', element: <BusinessSavingAccount /> },
            { path: 'business-checking-account', element: <BusinessChecking /> },
            { path: 'business-loans', element: <BusinessLoans /> },
            { path: 'commercial-real-estate-lending', element: <BusinessCREL /> },
          ],
        },
        {
          path: 'resources',
          element: <Resource />,
          children: [
            { path: '', element: <ResourceIndex /> },
            { path: 'digital-assets', element: <ResourceDigitalAssets /> },
            { path: 'retirement-&-spouse-program', element: <ResourceRASProgram /> },
            { path: 'pamm-and-mam', element: <ResourcePAM /> },
            { path: 'cannabis-investments', element: <ResourceCAI /> },
          ],
        },
        {
          path: 'ways-to-bank',
          element: <WaysToBank />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
