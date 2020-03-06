import React, {useState} from 'react'
import { 
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

export default function Input() {
  const [input, setInput] = useState('@tylermcginnis')
  const [showInput, setShowInput] = useState(false)

  const toggleSwitch = () => {
    setShowInput(currentValue => !currentValue)
  }

  const handleChange = (val) => {
    console.log(val)
    setInput(val)
  }

  return (
    <KeyboardAvoidingView behavior='padding'>
      <Switch
        value={showInput}
        onValueChange={toggleSwitch}
      />
      {showInput && (
        <TextInput 
          value={input} 
          style={styles.input}
          onChange={handleChange}
        />
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
})
