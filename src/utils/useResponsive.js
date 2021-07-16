import { useState, useEffect, useCallback } from "react";

export const MOBILE_SCREEN = 825;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

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

export const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
