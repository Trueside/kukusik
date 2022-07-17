import express from 'express'
const APP = express();
const PORT = 8888;

APP.use(express.static("src/html", { root: '.' }));

APP.get('/', (req, res) => {
	res.sendFile('src/html/spongeBob.html', { root: '.' });
})

APP.get('/kukusik', (req, res) => {
	res.sendFile('src/html/kukusik.html', { root: '.' });
})

APP.listen(PORT, () => {
	console.log(`Application listening on port ${PORT}`);
});
