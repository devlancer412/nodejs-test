import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT; // default port to listen
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});