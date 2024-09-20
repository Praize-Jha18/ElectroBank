import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useState } from 'react';

// Type for dropdown names
type DropdownKeys = 'personal' | 'business' | 'resources';

const RenderMultipleLinks = (props: { links: string[], parent: string }) => (
  <>
    {props.links.map((value, key) => (
      <Link 
        to={`${props.parent}/${value.split(" ").join("-").toLowerCase()}`} 
        key={key} 
        className="block w-full px-4 text-[.8rem] font-semibold py-2 text-gray-700 hover:bg-gray-200"
      >
        {value}
      </Link>
    ))}
  </>
);

const Top = () => {
  const personalLinks = [
    "Personal Checking",
    "Savings", 
    "Investment Solutions",
    "Loans"
  ];

  const businessLinks = [
    "Business Banking Solutions",
    "Business Savings Account",
    "Business Checking Account",
    "Business Loans",
    "Commercial Real Estate Lending"
  ];

  const resourcesLinks = [
    "Digital Assets",
    "Retirement & Spouse Program",
    "Pamm And Mam",
    "Cannabis Investments"
  ];

  // Define the type of isOpen state to have specific keys
  const [isOpen, setIsOpen] = useState<{ personal: boolean, business: boolean, resources: boolean }>({
    personal: false,
    business: false,
    resources: false
  });

  const toggleDropdown = (dropdown: DropdownKeys) => {
    setIsOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleMouseEnter = (dropdown: DropdownKeys) => {
    setIsOpen((prev) => ({
      ...prev,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown: DropdownKeys) => {
    setIsOpen((prev) => ({
      ...prev,
      [dropdown]: false,
    }));
  };

  return (
    <div className="navbar px-4 bg-slate-100 df-jsb sticky top-0 z-50">
      <div className="logo">
        <Link to="/"><picture><img src={logo} className="h-12" alt="logo" /></picture></Link>
      </div>
      <div className="links dfAc gap-4">
        {/* Personal Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('personal')} 
          onMouseLeave={() => handleMouseLeave('personal')}
        >
          <Link to="/personal" className='' onClick={() => toggleDropdown('personal')}>Personal</Link>
          {isOpen.personal && (
            <div className="dropdown w-44 df-fldc absolute bg-white border border-gray-200 rounded-lg shadow-lg">
              <RenderMultipleLinks links={personalLinks} parent="personal" />
            </div>
          )}
        </div>

        {/* Business Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('business')} 
          onMouseLeave={() => handleMouseLeave('business')}
        >
          <Link to="/business" onClick={() => toggleDropdown('business')}>Business</Link>
          {isOpen.business && (
            <div className="dropdown  w-52 df-fldc absolute bg-white border border-gray-200 rounded-lg shadow-lg">
              <RenderMultipleLinks links={businessLinks} parent="business" />
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('resources')} 
          onMouseLeave={() => handleMouseLeave('resources')}
        >
          <Link to="/resources" onClick={() => toggleDropdown('resources')}>Resources</Link>
          {isOpen.resources && (
            <div className="dropdown w-56 absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
              <RenderMultipleLinks links={resourcesLinks} parent="resources" />
            </div>
          )}
        </div>

        <Link to="/ways-to-bank">Ways To Bank</Link>
        <Link to="/register">Open Account</Link>
        <Link to="/login">Activate Account</Link>
        <Link to="/register">Investment Portal</Link>
      </div>
    </div>
  );
};

export default Top;
