import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {colors} from './colors';

const commonTheme = {
  activeTabTint: {
    color: colors.blue[1],
  },
  buttonBackground: {
    backgroundColor: colors.blue[1],
  },
  containerText: {
    color: colors.white,
  },
  inputContainerError: {
    borderColor: colors.red,
  },
  inputContainerFocused: {
    borderColor: colors.blue[1],
  },
  inputTextError: {
    color: colors.red,
  },
  placeholderContainer: {
    backgroundColor: colors.grey[8],
  },
  searchBarContainer: {
    backgroundColor: colors.white,
  },
  segmentBorder: {
    borderColor: colors.grey[9],
  },
  titlePlaceholderContainer: {
    backgroundColor: colors.grey[7],
  },
  uploadButton: {
    backgroundColor: colors.blue[3],
  },
  userPhoto: {
    backgroundColor: colors.grey[7],
  },
};

export const darkTheme = {
  ...commonTheme,
  authenticationFormContainer: {
    backgroundColor: colors.black[3],
  },
  contactItemBackground: {
    backgroundColor: colors.grey[1],
  },
  handle: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.grey[1],
  },
  inputContainer: {
    backgroundColor: colors.grey[1],
    borderColor: colors.grey[1],
    borderWidth: 1,
  },
  inputPlaceholderColor: colors.grey[2],
  inputText: {
    color: colors.white,
  },
  labelText: {
    color: colors.white,
  },
  navigationTheme: {
    ...DarkTheme,
    colors: {
      background: colors.black[3],
    },
  },
  overlayBackground: {
    backgroundColor: colors.grey[1],
  },
  screenBackground: {
    backgroundColor: colors.black[3],
  },
  tabBarCenterButton: {
    backgroundColor: colors.blue[1],
    borderColor: colors.grey[1],
  },
  titleText: {
    color: colors.white,
  },
};

export const lightTheme = {
  ...commonTheme,
  authenticationFormContainer: {
    backgroundColor: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.grey[4],
    borderColor: colors.grey[4],
    borderWidth: 1,
  },
  inputPlaceholderColor: colors.grey[3],
  inputText: {
    color: colors.black[2],
  },
  navigationTheme: {
    ...DefaultTheme,
    colors: {
      background: colors.white,
    },
  },
  screenBackground: {
    backgroundColor: colors.white,
  },
  titleText: {
    color: colors.blue[2],
  },
};
