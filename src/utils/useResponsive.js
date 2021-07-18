import { useState, useEffect, useCallback } from "react";

export const MOBILE_SCREEN = 825;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SCREEN);

  const handleWindowResize = useCallback(
    (event) => {
      const screenSize = window.innerWidth;

      if (!isMobile && screenSize <= MOBILE_SCREEN) {
        setIsMobile(true);
      } else if (isMobile && screenSize >= MOBILE_SCREEN) {
        setIsMobile(false);
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
