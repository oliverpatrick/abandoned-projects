import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#e3e3e3', '#202023')(props)
    }
  })
};

// const components = {
//   Link: {
//     baseStyle: (props: any) => ({
//       color: mode('#b802cc', '#ff63c3')(props),
//       textUnderlineOffset: 3
//     })
//   }
// };

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles
  // components
});

export default theme;
