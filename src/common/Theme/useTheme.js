import {useColorScheme} from 'react-native';

import {darkTheme, lightTheme} from './themes';

const useTheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') return darkTheme;

  return lightTheme;
};

export default useTheme;
