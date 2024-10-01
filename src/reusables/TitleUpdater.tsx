import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        // Define titles for each route with a fallback for undefined routes
        const titles: { [key: string]: string; } = {
            '/': 'Home - EliteCity Savings',
            '/about-us': 'About Us - EliteCity Savings',
            '/contact-us': 'Contact Us - EliteCity Savings',
            '/ways-to-bank': 'Ways To Banks - EliteCity Savings',

            // personal
            '/personal': 'Personal - EliteCity Savings',
            '/personal/personal-checking': 'Personal Checking - EliteCity Savings',
            '/personal/savings': 'Savings - EliteCity Savings',
            '/personal/loans': 'Loans - EliteCity Savings',
            '/personal/investment-solutions': 'Investment Solutions - EliteCity Savings',

            //  business
            '/business': 'Business - EliteCity Savings',
            '/business/business-banking-solutions': 'Business Banking Solutions - EliteCity Savings',
            '/business/business-savings-account': 'Business Savings Account- EliteCity Savings',
            '/business/business-checking-account': 'Business Checking Account - EliteCity Savings',
            '/business/business-loans': 'Business Loans - EliteCity Savings',
            '/business/commercial-real-estate-lending': 'Commercial Real Estate Lending - EliteCity Savings',

            //  resources
            '/resources': 'Business - EliteCity Savings',
            '/resources/digital-assets': 'Digital Assets - EliteCity Savings',
            '/resources/retirement-&-spouse-program': 'Retirement & Spouse Program - EliteCity Savings',
            '/resources/pamm-and-mam': 'Pamm And Mam - EliteCity Savings',
            '/resources/cannabis-investments': 'Cannabis Investments - EliteCity Savings',

            '/account': 'Account - EliteCity Savings',
            '/account/deposit': 'Deposit - EliteCity Savings',
            '/account/loan': 'Loan - EliteCity Savings',
            '/account/cards':'Card - EliteCity Savings',
            '/account/bank-transfer': 'Bank Transfer - EliteCity Savings',
        };

        console.log(location.pathname);
        // Update the document title based on the current route
        document.title = titles[location.pathname] || '';

    }, [location]);

    return null;
};
