import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = ({ children, hideLoader }) => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(true);
    const isFirstLoad = localStorage.getItem('isFirstLoad') === null;

    useEffect(() => {
        if (isFirstLoad) {
            // Hide loader immediately on initial mount
            setShowLoader(false);
            localStorage.setItem('isFirstLoad', 'false');
            hideLoader(); // Call the hideLoader function passed from the parent
        } else {
            setShowLoader(true);

            // Display loader for 2 seconds (adjust duration as needed)
            const loaderTimeout = setTimeout(() => {
                setShowLoader(false);
            }, 2000);

            return () => {
                clearTimeout(loaderTimeout);
            };
        }
    }, [location, isFirstLoad, hideLoader]);

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
