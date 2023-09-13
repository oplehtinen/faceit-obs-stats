<script>
	// using obs websocket, save replay buffer
	import OBSWebSocket from 'obs-websocket-js';
	const obs = new OBSWebSocket();

	// change these to your obs settings
	const obsSettings = {
		address: 'ws://127.0.0.1:4455',
		password: '37OSQtUH3Jjd1DxT',
		identificationParams: {}
	};

	// connect to obs
	obs
		.connect(obsSettings.address, obsSettings.password)
		.then(() => {
			console.log(`Connected to OBS at ${obsSettings.address}`);
			// change scene
			obs.call('SetCurrentProgramScene', {
				sceneName: 'PELI'
			});
		})
		.catch((err) => {
			console.log(err);
		});

	// save replay buffer
</script>
