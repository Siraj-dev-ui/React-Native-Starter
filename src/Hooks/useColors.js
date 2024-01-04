import {useTheme} from '../Context/ThemeContext';
import {darkTheme, lightTheme} from '../Theme/Colors';

export const useColors = () => {
  const {theme} = useTheme();

  return theme === 'dark' ? darkTheme : lightTheme;
};
