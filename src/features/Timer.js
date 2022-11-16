import React, {useState} from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'
import { Timing } from './Timing'
import { Countdown } from '../components/CountDown'
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'
import { colors } from '../utils/colors'

 const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
  ];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)
  
  const callOnEnd = (reset) => {
    setIsStarted(false);
    Vibration.vibrate(PATTERN)
    setProgress(1)
    reset()
    onTimerEnd(focusSubject)
   
  }
  return(
    <View style={styles.container}>
      <View style={styles.countdown}> 
        <Countdown 
        minutes = {minutes}
        isPaused={!isStarted} 
        onProgress={setProgress} 
        onEnd={callOnEnd}
        /> 
      </View>
      <View style= {{paddingTop: spacing.lg}}>
          <Text style={styles.title}> Focusing on </Text>
           <Text style={styles.task}> Task:  {focusSubject} </Text>

      </View>
      <View>
        <ProgressBar progress={progress}
          color={colors.white} style={{height: spacing.sm}}
        />

      </View>
      <View style={styles.buttonWrapper}>
         {!isStarted && <RoundedButton title="start" onPress={()=>setIsStarted(true)}/> }
          { isStarted && (
             <RoundedButton title="pause" onPress={()=>setIsStarted(false)}/>
        )}       
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View >
        <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
        </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  countdown: {
    flex:0.40,
    alignItems:'center',
    padding: 50,
    justifyContent: 'center'
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection:'row',
    padding:15,
    justifyContent:'center',
    alignItems:'center',
    
  },
  title: {
    color : colors.white,
    fontWeight: 'bold',
    textAlign:'center'
  },
  task: {
    color: colors.white,
     textAlign:'center'
  }
}) 