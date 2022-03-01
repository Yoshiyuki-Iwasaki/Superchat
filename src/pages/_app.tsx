import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';
import { useRecoilState } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
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

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
