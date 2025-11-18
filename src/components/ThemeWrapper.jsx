import { useSelector } from "react-redux";
import { useEffect } from "react";

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeWrapper;
