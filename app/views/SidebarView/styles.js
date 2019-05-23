import { StyleSheet } from 'react-native';
import { COLOR_SEPARATOR } from '../../constants/colors';

import sharedStyles from '../Styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#030303'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	itemCurrent: {
		backgroundColor: '#252525'
	},
	itemLeft: {
		marginHorizontal: 10,
		width: 30,
		alignItems: 'center'
	},
	itemCenter: {
		flex: 1
	},
	itemText: {
		marginVertical: 16,
		fontSize: 14,
		...sharedStyles.textSemibold,
		...sharedStyles.textColorNormal,
		color: '#999'
	},
	separator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: COLOR_SEPARATOR,
		marginVertical: 4
	},
	sidebarSeparator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#2b2b2b',
		marginVertical: 4
	},
	header: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerTextContainer: {
		flex: 1,
		marginTop: 8,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	headerUsername: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	username: {
		fontSize: 14,
		...sharedStyles.textColorNormal,
		...sharedStyles.textMedium,
		color: '#999'
	},
	headerIcon: {
		paddingHorizontal: 10,
		...sharedStyles.textColorNormal
	},
	avatar: {
		marginHorizontal: 10
	},
	status: {
		marginRight: 5
	},
	currentServerText: {
		fontSize: 14,
		...sharedStyles.textColorNormal,
		...sharedStyles.textSemibold,
		color: '#2b2b2b',
		marginTop: 4
	},
	version: {
		marginHorizontal: 10,
		marginBottom: 10,
		fontSize: 13,
		...sharedStyles.textColorNormal,
		...sharedStyles.textSemibold,
		color: '#000'
	},
	inverted: {
		transform: [{ scaleY: -1 }]
	}
});
