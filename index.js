import React from 'react'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'

const KeyboardDismissHOC = (Comp) => {
	return ({children, ...props}) => (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={{flex:1}}>
				<Comp {...props}>
					{children}
				</Comp>
			</View>
		</TouchableWithoutFeedback>
	)
}
export default KeyboardDismiss = KeyboardDismissHOC(View)