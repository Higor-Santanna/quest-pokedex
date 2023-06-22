import React, { useContext, useState } from 'react';
import { AppRoutes } from './pages/routes'
import { themes, ThemeContext } from './styles/themes';
import { CustomThemeProvider } from './styles/themes/';
import { ButtonTheme } from './components/themeButton/themeButton';
import { GlobalStyle } from './styles/globalStyle'

function App() {
  // const [ theme, setTheme ] = useState('light')
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  console.log( theme )

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <ButtonTheme onClick={toggleTheme}></ButtonTheme> 
      <AppRoutes />
    </CustomThemeProvider>
  );
}

export default App;
