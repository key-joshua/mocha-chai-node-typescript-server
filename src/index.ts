import routes from './routes';
import "./database/config/dababase";
import express, { Express } from "express";

const PORT: Number = 3000;
const app: Express = express();

app.use(express.json());
app.use('/api', routes);
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));

export default app;