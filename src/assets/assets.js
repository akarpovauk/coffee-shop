
function importAll(folder) {
	let images = {};
	let key;
	folder.keys().map(item => { 
		key = item.replace('./', '').split('/');
	  	key = key[key.length - 1];
	  	images[key] = folder(item);
		console.log(key);
		return images
	});
	return images;
}

const assets = importAll(require.context('../assets/', true, /\.(png|jpe?g|svg)$/));

export default assets;
