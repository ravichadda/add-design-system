import { ThemeProvider } from '@add/design-system/ThemeProvider';
import { lightTheme } from '@add/design-system/themes';
import PropTypes from 'prop-types';
import { SkipToContent } from '@add/design-system/Main';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SkipToContent>Skip to content</SkipToContent>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default App;
