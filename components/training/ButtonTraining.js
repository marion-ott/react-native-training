import React, {useEffect} from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  TouchableHighlight, 
  TouchableNativeFeedback, 
  TouchableOpacity, 
  TouchableWithoutFeedback
} from 'react-native'
import AddEntry from './components/AddEntry'

export default function App() {

  const handlePress = () => {
    alert('btn pressed')
  }

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handlePress}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Touchable highlight</Text>
        </View>
      </TouchableNativeFeedback>
      <AddEntry/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
  }
});
