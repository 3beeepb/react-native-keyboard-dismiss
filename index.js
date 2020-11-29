import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

export default KeyboardDismiss = (children) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={{flex:1}}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	)
}