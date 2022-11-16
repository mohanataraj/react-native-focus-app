import React, {useState} from 'react';
import { Appbar } from 'react-native-paper';
import { Focus } from '../features/Focus'


export const AppBar = () => {
    const [goBack,setGoBack] = useState(false)
    
  return (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => setGoBack(true)}   />
    <Appbar.Content title="Focus App" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
  )
}

