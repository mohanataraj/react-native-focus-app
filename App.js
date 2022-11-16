import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { FocusHistory } from './src/features/FousHistoy'

import Constants from 'expo-constants';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus'
import { Timer } from './src/features/Timer'

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { AppBar } from './src/components/AppBar'


export default function App() {
  const [history,setHistory] = useState([])
  const [currentSubject, setCurrentSubject] = useState(null)
  console.log(history)
  return (
    <SafeAreaView style= {styles.container}>
   
          {
            !currentSubject ?(
              <>
               <Focus addSubject={setCurrentSubject} /> 
               <FocusHistory history={history}  />
               </>
               ): 
          (<Timer focusSubject={currentSubject}
            onTimerEnd={(subject)=>{
            console.log("re",history)
              return setHistory([...history,subject])
              }
              
              }
            clearSubject={()=>{setCurrentSubject(null)}}
          />)}
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkRed
  },
});
