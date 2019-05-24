import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import isEqual from 'deep-equal';
import Player from 'react-native-video';

import Markdown from './Markdown';
// import openLink from '../../utils/openLink';
// import { isIOS } from '../../utils/deviceInfo';
import { CustomIcon } from '../../lib/Icons';
import { formatAttachmentUrl } from '../../lib/utils';

// const SUPPORTED_TYPES = ['video/quicktime', 'video/mp4', ...(isIOS ? [] : ['video/webm', 'video/3gp', 'video/mkv'])];
// const isTypeSupported = type => SUPPORTED_TYPES.indexOf(type) !== -1;

const styles = StyleSheet.create({
	button: {
		flex: 1,
		borderRadius: 4,
		height: 200,
		marginBottom: 6,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#000'
	},
	modal: {
		margin: 0,
		backgroundColor: '#000'
	},
	image: {
		color: 'white'
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

const Video = React.memo(({
	file, baseUrl, user, useMarkdown, onOpenFileModal, getCustomEmoji
}) => {
	if (!baseUrl) {
		return null;
	}

	const onPress = () => onOpenFileModal(file);

	const uri = formatAttachmentUrl(file.video_url, user.id, user.token, baseUrl);

	return (
		<React.Fragment>
			<Touchable
				activeOpacity={0.7}
				onPress={onPress}
				background={Touchable.Ripple('#fff')}
			>
				<View style={styles.button}>
					<Player
						source={{ uri }}
						style={styles.backgroundVideo}
						paused
					/>
					<CustomIcon
						name='play'
						size={54}
						style={styles.image}
					/>
				</View>
			</Touchable>
			<Markdown msg={file.description} baseUrl={baseUrl} username={user.username} getCustomEmoji={getCustomEmoji} useMarkdown={useMarkdown} />
		</React.Fragment>
	);
}, (prevProps, nextProps) => isEqual(prevProps.file, nextProps.file));

Video.propTypes = {
	file: PropTypes.object,
	baseUrl: PropTypes.string,
	user: PropTypes.object,
	useMarkdown: PropTypes.bool,
	onOpenFileModal: PropTypes.func,
	getCustomEmoji: PropTypes.func
};

export default Video;
