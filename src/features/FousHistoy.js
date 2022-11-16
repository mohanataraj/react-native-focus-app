import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes } from '../utils/sizes'

export const FocusHistory = ({history}) => {
  //if(history || history.length) return null
  const renderItem = ({item}) => <Text style={styles.item}> - {item}</Text>
  return(
    <View style={styles.container}> 
      <Text style={styles.title}> Focus History:  </Text>
      <FlatList 
        data = {history}
        renderItem = {renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign:'center',
    padding: 32,
    fontWeight: 'bold'
  },
  item: {
    fontSize: 16,
    color: colors.white
  },
  container:{
    padding: 16,
    flex:1
  }
})