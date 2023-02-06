import { StatusBar } from 'expo-status-bar';
import { NativeModules, Platform, StyleSheet, Text, View } from 'react-native';
import { centered } from './assets/theme';
import Task from './components/Task';
import strings from './lang/en/strings';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
 
export default function App() {

  const [fontsLoaded] = useFonts({
    Cutefont: require('./assets/fonts/Cutefont.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if(!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

  console.log(deviceLanguage); //en_US

  return (
    <View style={[ centered, styles.container]}>
      <StatusBar style="auto" />
      
      <Text>{strings.ANOTHER_STRING}</Text>
      <Task/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
