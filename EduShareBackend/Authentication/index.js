import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const port = 3000;

app.use(bodyParser.json());

import routes from '../apis/routes';
routes(app);
app.listen(port, () => console.log(`App starting on port ${port}`));