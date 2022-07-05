import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
    };

    transitions: {
      fast: string;
      medium: string;
      slow: string;
    };
  }
}
