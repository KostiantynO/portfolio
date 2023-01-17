import 'styled-components/macro';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    colors: typeof colors;
  }
}

export const breakpoints = Object.freeze({
  mobile: '320px' as const,
  preTablet: '767px' as const,
  tablet: '768px' as const,
  preDesktop: '1199px' as const,
  desktop: '1200px' as const,
});

export const colors = Object.freeze({
  accent: '#2196f3',
  fg: '#212121',
  bg: '#eeeeee',
});
