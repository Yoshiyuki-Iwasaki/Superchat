import { useRecoilState } from "recoil";
import { themeState } from "../components/atom";
import { lightTheme, darkTheme } from "../components/theme";

const useDarkMode = () => {
  const [theme, setTheme] = useRecoilState<any>(themeState);

  const saveTheme = (chosenTheme: any) => {
    window.localStorage.setItem("THEME_TUTORIAL", chosenTheme);
  };

  const toggleTheme = () => {
    saveTheme(theme.type === "light" ? "dark" : "light");
    setTheme((theme: any) => (theme.type === "light" ? darkTheme : lightTheme));
    console.log("theme", theme);
  };

  return [theme, toggleTheme];
};
export default useDarkMode;
