import '../../styles/globals.css'
import { AppProps } from "next/app";
import { supabase } from "../util/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../styles/Themes";
import { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  // const [themeMode, setThemeMode] = useRecoilState(theme);

  // const setMode = mode => {
  //   window.localStorage.setItem("theme", mode);
  //   setTheme(mode);
  // };

  // const toggleDarkMode = () => {
  //   theme === "light" ? setMode("dark") : setMode("light");
  // };

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme");
  //   localTheme ? setTheme(localTheme) : setMode("light");
  // }, []);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user && (pathname === "/signin" || pathname === "/signup")) {
      push("/");
    } else if (!session?.user && pathname !== "/signup") {
      push("/signin");
    }
  });

  useEffect(() => {
    (async () => {
      const user = supabase.auth.user();
      if (user && (pathname === "/signin" || pathname === "/signup")) {
        await push("/");
      } else if (!user && pathname !== "/signup") {
        await push("/signin");
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  );
}

export default MyApp
