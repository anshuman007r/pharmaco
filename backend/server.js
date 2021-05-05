import app from './app';

const port = process.env.PORT || '8181'; app.listen(port); 

console.log(`Listening on port ${port}`);