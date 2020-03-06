import React, {useState} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Ionicons} from '@expo/vector-icons'
import { 
  View,
  StyleSheet,
  Platform
} from 'react-native'
import AddEntry from './components/AddEntry'

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <AddEntry/>
        {Platform.OS === 'ios' 
          ? <Ionicons name='ios-pizza' size={100} color='red' />
          : <Ionicons name='md-pizza' size={100} color='red' />
        }
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1'
  }
})