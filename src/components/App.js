import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class App extends Component {
	render(){
		return(
			<View style={styles.test}>
				<Text>Hi. Welcome to Master.</Text>
				<Text>This App's Name is 'Upload Saver'</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	test:{
		backgroundColor:'#ff6666',
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
})

export default App;