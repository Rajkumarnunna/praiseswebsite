import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './src/context/ThemeContext';
import { FontSizeProvider } from './src/context/FontSizeContext';
import AppNavigator from './src/navigation/AppNavigator';
import { colors, theme } from './src/styles/theme';
import ThemeTransitionWrapper from './src/components/ThemeTransitionWrapper';

const App = () => {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <ThemeTransitionWrapper>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.primary}
            translucent
          />
          <NavigationContainer theme={theme}>
            <AppNavigator />
          </NavigationContainer>
        </ThemeTransitionWrapper>
      </FontSizeProvider>
    </ThemeProvider>
  );
};

export default App; 