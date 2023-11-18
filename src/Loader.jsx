import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = ({ children }) => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const handleNavigation = () => {
            setShowLoader(true);

            // Display loader for 2 seconds (adjust duration as needed)
            const loaderTimeout = setTimeout(() => {
                setShowLoader(false);
            }, 2000);

            return () => {
                clearTimeout(loaderTimeout);
            };
        };

        // Attach event listener for route change
        const unlisten = () => handleNavigation();
        const historyUnlisten = window.addEventListener('popstate', handleNavigation);

        // Detach event listeners when the component is unmounted
        return () => {
            unlisten();
            window.removeEventListener('popstate', historyUnlisten);
        };
    }, [location]);

    return showLoader ? (
        <div className="page-loader">
            <span className="loader"></span>
        </div>
    ) : (
        <>
            {children}
        </>
    );
};

export default Loader;
