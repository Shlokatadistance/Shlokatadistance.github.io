import {Header} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import React from 'react';
import {View, Text} from 'react-native';

const HeaderConfig = () => {
	return(
		<Header 
			leftComponent={{Icon : 'menu',text : ' The'}}
		
		centerComponent={{Icon:'image', Text : 'Name of the person'}} 
		rightComponent={{Icon:'plus'}}
		/>
	);
};
export default HeaderConfig;