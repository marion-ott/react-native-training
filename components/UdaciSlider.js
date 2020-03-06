import React, {useState} from 'react'
import {View, Text, Slider} from 'react-native'

export default function UdaciSlider({max, unit, step, value, onChange}) {
  return(
    <View>
      <Slider 
        value={value} 
        onValueChange={onChange} 
        minimumValue={0}
        maximumValue={max}
        step={step}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}