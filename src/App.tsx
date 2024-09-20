import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/nav/Navbar';

// personal imports
import Loans from './pages/personal/Loans';
import InvestmentSolutions from './pages/personal/InvestmentSolutions';
import Personal from './pages/personal/Personal';
import PersonalIndex from './pages/personal/PersonalIndex';
import PersonalChecking from './pages/personal/PersonalChecking';
import PersonalSaving from './pages/personal/PersonalSaving';

// Business imports
import Business from './pages/business/Business';
import BusinessIndex from './pages/business/BusinessIndex';
import BusinessBankingSolutions from './pages/business/BusinessBankingSolutions';
import BusinessSavingAccount from './pages/business/BusinessSavingAccount';
import Resource from './pages/resources/Resource';
import ResourceIndex from './pages/resources/ResourceIndex';
import ResourceDigitalAsstes from './pages/resources/ResourceDigitalAsstes';
import ResourceRASProgram from './pages/resources/ResourceRASProgram';
import ResourcePAM from './pages/resources/ResourcePAM';
import ResourceCAI from './pages/resources/ResourceCAI';
import WaysToBank from './pages/WaysToBank';

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
        {
          path: 'personal',
          element: <Personal />,
          children: [
            { path: '', element: <PersonalIndex /> },
            { path: 'personal-checking', element: <PersonalChecking /> },
            { path: 'saving', element: <PersonalSaving /> },
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
            { path: 'business-saving-account', element: <BusinessSavingAccount /> },
            { path: 'business-checking-account', element: <BusinessSavingAccount /> },
            { path: 'business-loans', element: <BusinessSavingAccount /> },
            { path: 'commercial-real-estate-lending', element: <BusinessSavingAccount /> },
         
          ],
        },
        {
          path: 'resources',
          element: <Resource />,
          children: [
            { path: '', element: <ResourceIndex /> },
            { path: 'digital-assets', element: <ResourceDigitalAsstes /> },
            { path: 'retirement-spouse-program', element: <ResourceRASProgram /> },
            { path: 'pamm-and-mam', element: <ResourcePAM /> },
            { path: 'cannabis-investments', element: <ResourceCAI /> },
         
          ],
        },
        {
          path: 'ways-to-bank',
        element:<WaysToBank/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
