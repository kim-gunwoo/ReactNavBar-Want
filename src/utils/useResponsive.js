import { useState, useEffect, useCallback } from "react";

export const MOBILE_SCREEN = 825;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(checkedMobileScreen());

  const handleWindowResize = useCallback(
    (event) => {
      if (isMobile !== checkedMobileScreen()) {
        setIsMobile(checkedMobileScreen());
      }
    },
    [isMobile]
  );

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return isMobile;
};

const checkedMobileScreen = () => {
  return window.innerWidth <= MOBILE_SCREEN;
};
