import React, {useState} from 'react';
import { View, Text, StyleSheet }from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/colors'
import { RoundedButton } from '../components/RoundedButton'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  console.log(subject)
 return ( 
<View style={styles.container}>
  <View style={styles.inputContainer}>
    <TextInput style={styles.textInput}
    label="What would you like to focus on ?" 
    onChangeText={setSubject}
    />
    <View style={styles.roundedButton}>
      <RoundedButton  title="+" size={50} onPress={()=> addSubject(subject)}/>
    </View>
  </View>

</View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  roundedButton: {
    justifyContent: 'center'
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex:0.8,
    marginRight:10
  },
  inputContainer: {
    flexDirection:'row',
    padding: 20,
    justifyContent: 'top'
  }
})