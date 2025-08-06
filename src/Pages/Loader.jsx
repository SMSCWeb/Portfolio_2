import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "@/index.css"; // Ensure this import is present

const Loader = ({ children, hideLoader }) => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const isFirstLoad = localStorage.getItem("isFirstLoad") === null;

  useEffect(() => {
    if (isFirstLoad) {
      setShowLoader(false);
      localStorage.setItem("isFirstLoad", "false");
      hideLoader();
    } else {
      setShowLoader(true);
      const loaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => clearTimeout(loaderTimeout);
    }
  }, [location, isFirstLoad, hideLoader]);

  return showLoader ? (
    <div className="page-loader">
      <div className="loader"></div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
