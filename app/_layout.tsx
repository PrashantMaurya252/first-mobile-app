import { Stack } from "expo-router";
import "./global.css"
import {useFonts} from 'expo-font'

export default function RootLayout() {
  // const [fontsLoaded] = useFonts(map:{
  //   "Rubik-Bold":require('../assets/fonts/Rubik-Bold.ttf'),
  //   "Rubik-ExtraBold":require('../assets/fonts/Rubik-ExtraBold.ttf')
  // })
  return <Stack />;
}
