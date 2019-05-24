export default function(message) {
	let url = '';
	if (/image/.test(message.type)) {
		return { image_url: message.url };
	}
	if (/audio/.test(message.type)) {
		url = message.url.replace('/ufs/GridFS:Uploads', '/file-upload');
		return { audio_url: url };
	}
	if (/video/.test(message.type)) {
		url = message.url.replace('/ufs/GridFS:Uploads', '/file-upload');
		return { video_url: url };
	}
	return {
		title_link: message.url,
		type: 'file'
	};
}
