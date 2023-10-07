import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

function Provider({ children }) {
  const [currentPath, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setPath(to);
  };

  return (
    <NavContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export { Provider };
export default NavContext;
