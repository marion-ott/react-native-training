import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {FontAwesome, Entypo} from '@expo/vector-icons'
import {white, green, purple} from './../utils/colors'

export default function UdaciSteppers({max, unit, step, value, onIncrement, onDecrement}) {
  return(
    <View style={[styles.row, {justifyContent: 'space-between'}]}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]} onPress={onDecrement}>
          <FontAwesome name='minus' size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iosBtn} onPress={onIncrement}>
          <FontAwesome name='plus' size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  }
})