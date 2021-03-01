import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

const ScrollToTop: React.FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (location.pathname !== "/") {
        window.scrollTo(0, 0);
        const menu = document.getElementById("menu")!;
        menu.classList.remove("sticky");
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
