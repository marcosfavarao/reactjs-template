import { ThemeProvider } from 'styled-components';

import { GlobalStyles, lightTheme, darkTheme } from './common/styles';

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <h1>React App</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
};
