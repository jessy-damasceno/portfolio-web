import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';
import request from 'request';

const PORT = process.env.PORT || 3001;

const test = () => {
	setInterval(() => {
		request(`${process.env.HOST}/healthz`, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(`Never sleeps! Running server on port: ${PORT}`);
			}
		});
	}, 60000);
};

connectToDatabase()
	.then(() => {
		app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
	})
	.catch((error: Error) => {
		console.log('Connection with database generated an error:\r\n');
		console.error(error);
		console.log('\r\nServer initialization cancelled');
		process.exit(0);
	});

test();
