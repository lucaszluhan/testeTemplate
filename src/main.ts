import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.listen(8081, () => console.log('Server is running...'));
